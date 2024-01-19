import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
} from "./myTypes";
import { friendsdata} from "./01-basics";

const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@company.com",
        extension: 121,
    },
};
const colleague2:ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
): BuddyList {
    return {
        name,
        members: buddies,
        administrator: admin,
    } as BuddyList;
    // The as operator above casts an object to a specific type.
}
// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friendsdata[0], colleague2],
    colleague1
);

const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friendsdata[1]]
    // No administrator
);

console.log(myFootballBuddies);
console.log(myBandBuddies);

//--------------------------------------

function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
        if (buddy.name === name) {
            if ("phone" in buddy) {
                return buddy.phone;
            } else {
                return buddy.contact.email;
            }
        }
    }
    return undefined;
}

// Test for findBuddyContact.
console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

//--------------------------------------

function getBuddyListFriends(list: BuddyList): Friend[] {
    // Using array reduce to filter out only Friends from Buddy array
    return list.members.reduce((friendsArray: Friend[], buddy: Buddy) => {
        if ("phone" in buddy) {
            friendsArray.push(buddy); // It's a Friend
        }
        return friendsArray;
    }, []);
}

// Test for getBuddyListFriends.
console.log("Friends in the list: ", getBuddyListFriends(myFootballBuddies));