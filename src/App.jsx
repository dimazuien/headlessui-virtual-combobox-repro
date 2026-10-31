// The "Virtual scrolling" example from https://headlessui.com/react/combobox, unchanged except
// for the generated people and the centering wrapper.
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useState } from 'react';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
  ...Array.from({ length: 1000 }, (_, index) => ({
    id: index + 6,
    name: `Person ${index + 6}`,
  })),
];

function Example() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selectedPerson}
      virtual={{ options: filteredPeople }}
      onChange={setSelectedPerson}
      onClose={() => setQuery('')}
    >
      <ComboboxInput
        aria-label='Assignee'
        displayValue={(person) => person?.name}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ComboboxOptions
        anchor='bottom'
        className='w-(--input-width) border empty:invisible'
      >
        {({ option: person }) => (
          <ComboboxOption value={person} className='data-focus:bg-blue-100'>
            {person.name}
          </ComboboxOption>
        )}
      </ComboboxOptions>
    </Combobox>
  );
}

export default function App() {
  return (
    <div className='grid h-screen w-screen place-content-center'>
      <Example />
    </div>
  );
}
