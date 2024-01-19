import {friendsdata, colleaguesdata} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friendsdata, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleaguesdata.current, (c) => c.department === 'Finance'  ))

// Generic sort function
function sort<T>(data: T[], sorter: (a: T, b: T) => number): T[] {
    return [...data].sort(sorter);
}

// Sort friends by age
console.log(sort<Friend>(friendsdata, (a, b) => a.age - b.age));

// Sort colleagues by extension number
console.log(
    sort<Colleague>(
        colleaguesdata.current,
        (a, b) => a.contact.extension - b.contact.extension
    )
);