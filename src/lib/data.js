import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function getData() {
  const filePath = path.join(process.cwd(), 'public', 'iuml-data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export function validateJSON(data) {
  const requiredFields = {
    mission: ['guid', 'content_en', 'content_hi'],
    vision: ['guid', 'content_en', 'content_hi'],
    about: ['guid', 'content_en', 'content_hi'],
    faqs: ['guid', 'question_en', 'answer_en', 'question_hi', 'answer_hi'],
    persons: ['guid', 'name', 'slug', 'essay_en', 'essay_hi'],
    events: ['guid', 'name', 'slug', 'date', 'essay_en', 'essay_hi'],
    committee_members: ['guid', 'name', 'committee_level', 'post'],
    organized_events: ['guid', 'event_type', 'start_date_time', 'slug']
  };

  const errors = [];
  // Validate single objects (mission, vision, about)
  ['mission', 'vision', 'about'].forEach((section) => {
    if (!data[section]) {
      errors.push(`Missing ${section} object`);
      return;
    }
    if (!data[section].guid || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(data[section].guid)) {
      errors.push(`Invalid or missing GUID in ${section}`);
    }
    requiredFields[section].forEach((field) => {
      if (!data[section][field]) {
        errors.push(`Missing ${field} in ${section}`);
      }
    });
  });
  // Validate arrays
  ['faqs', 'persons', 'events', 'committee_members', 'organized_events'].forEach((collection) => {
    if (!Array.isArray(data[collection])) {
      errors.push(`Invalid or missing array for ${collection}`);
      return;
    }
    data[collection].forEach((item, index) => {
      if (!item.guid || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(item.guid)) {
        errors.push(`Invalid or missing GUID in ${collection}[${index}]`);
      }
      requiredFields[collection].forEach((field) => {
        if (!item[field]) {
          errors.push(`Missing ${field} in ${collection}[${index}]`);
        }
      });
    });
  });
  return errors;
}