export const exampleData = {
  personal: {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phoneNumber: '123-456-7890',
    address: 'New York, NY, US',
  },
  academics: [
    {
      school: 'Example University',
      degree: 'Bachelors in Computer Science',
      startDate: '08/2020',
      endDate: '08/2024',
      location: 'New York City, US',
      id: crypto.randomUUID(),
    },
  ],
  experiences: [
    {
      company: 'LightBulb Inc.',
      position: 'Web developer',
      startDate: '01/2024',
      endDate: 'Present',
      location: 'New York City, US',
      description:
        'Build efficient and reusable front-end abstractions and systems. Identify and address performance bottlenecks. Participate in design and code reviews. Interact with other team members to incorporate their innovations.',
      id: crypto.randomUUID(),
    },
  ],
};
