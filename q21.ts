//21;They think of something you could store in a TypeScript Object.
 //Write a program that creates Objects containing these items.

// Array of TypeScript Objects
let locations: Location[] = [
  { name: 'Koho-e-Hamaliya', type: 'Hill' },
  { name: 'West Hills', type: 'Hill' },
  { name: 'East Hills', type: 'Hill' },
  { name: 'South Hills', type: 'Hill' },
  { name: 'North Hills', type: 'Hill' },
  { name: 'Pakistan', type: 'Country' },
  { name: 'Russia', type: 'Country' },
  { name: 'Turkey', type: 'Country' },
  { name: 'Dubai', type: 'City' },
  { name: 'Indonesia', type: 'Country' },
  { name: 'Iran', type: 'Country' },
  { name: 'Afghanistan', type: 'Country' },
  { name: 'India', type: 'Country' },
  { name: 'Lahore', type: 'City' },
  { name: 'Multan', type: 'City' },
  { name: 'Karachi', type: 'City' },
  { name: 'Mumbai', type: 'City' },
  { name: 'Rajanpur', type: 'City' },
  { name: 'Dera Ghazi Khan', type: 'City' },
  { name: 'Rawalpindi', type: 'City' },
  { name: 'Bahriya', type: 'City' },
  { name: 'Punjab', type: 'Province' },
  { name: 'Sindh', type: 'Province' },
  { name: 'English', type: 'Language' },
  { name: 'Arabic', type: 'Language' },
  { name: 'Balochi', type: 'Language' },
  { name: 'Afghani', type: 'Language' },
  { name: 'Russian', type: 'Language' },
  { name: 'Turkey', type: 'Country' },
];

console.log(locations);

// Access and print information about individual objects
console.log('Information about Koho-e-Hamaliya:', getObjectInfo('Koho-e-Hamaliya', locations));
console.log('Information about Pakistan:', getObjectInfo('Pakistan', locations));
console.log('Information about Mumbai:', getObjectInfo('Mumbai', locations));

// Function to get information about an object by name
function getObjectInfo(name: string, objects: Location[]): Location | null {
  const foundObject = objects.find(obj => obj.name === name);
  return foundObject || null;
}
