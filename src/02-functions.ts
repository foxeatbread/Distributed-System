import { colleaguesdata, friendsdata } from './01-basics';
import { Friend, Colleague } from './myTypes'

function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}
function allOlder(friendsArray: Friend[]): string[] {
    return friendsArray.map((friend) => older(friend));
}

console.log(older(friendsdata[0]))
console.log(allOlder(friendsdata));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleaguesdata.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const highest = highestExtension(cs);
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highest.contact.extension + 1,
        },
    };
    cs.push(newColleague);
}

addColleague(colleaguesdata.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleaguesdata.current.filter((c) => c.name === "Sheild O Connell"));