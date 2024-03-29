import { colleaguesdata, friendsdata } from './01-basics';
import { Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}
function allOlder(friendsArray: Friend[]): string[] {
    return friendsArray.map((friend) => older(friend));
}

// console.log(older(friendsdata[0]))
// console.log(allOlder(friendsdata));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
// console.log(highestExtension(colleaguesdata.current));

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
// console.log(colleaguesdata.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0, end)
}

//   console.log(sortColleagues(colleaguesdata.current, (a, b) => a.contact.extension - b.contact.extension));
//   console.log(sortColleagues(colleaguesdata.current, (a, b) => a.name.length - b.name.length));
// console.log(sortColleagues(colleaguesdata.current, (a, b) => (a.contact.extension - b.contact.extension), 3));
// console.log(sortColleagues(colleaguesdata.current, (a, b) => (a.name.length - b.name.length), 1));
// console.log(sortColleagues(colleaguesdata.current, (a, b) => (a.name.length - b.name.length)));

function findFriends(friendsArray: Friend[], condition: (friend: Friend) => boolean): string[] {
    return friendsArray.filter(condition).map((friend) => friend.name);
}

// console.log(findFriends(friendsdata, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friendsdata, (friend) => friend.age < 35));

// Function to add interest to a friend's interests array
function addInterest(friend: Friend, interest: string): string[] {
    if (!friend.interests) {
        friend.interests = []; // If interests array is not defined, create a new one
    }
    friend.interests.push(interest);
    return friend.interests;
}
console.log(addInterest(friendsdata[0], 'Politics'));