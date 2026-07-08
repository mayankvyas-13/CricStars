// src/data/rankingsData.js
export const rankingsData = {
    men: {
      odi: {
        team: [
          { rank: 1, name: "India", rating: 121 },
          { rank: 2, name: "Australia", rating: 117 },
          { rank: 3, name: "South Africa", rating: 112 },
          { rank: 4, name: "Pakistan", rating: 106 },
          { rank: 5, name: "New Zealand", rating: 104 },
        ],
        batsmen: [
          { rank: 1, name: "Babar Azam", country: "PAK", rating: 824 },
          { rank: 2, name: "Shubman Gill", country: "IND", rating: 810 },
          { rank: 3, name: "Virat Kohli", country: "IND", rating: 775 },
          { rank: 4, name: "Rassie van der Dussen", country: "SA", rating: 765 },
          { rank: 5, name: "David Warner", country: "AUS", rating: 750 },
        ],
        bowlers: [
          { rank: 1, name: "Mohammed Siraj", country: "IND", rating: 725 },
          { rank: 2, name: "Josh Hazlewood", country: "AUS", rating: 715 },
          { rank: 3, name: "Shaheen Afridi", country: "PAK", rating: 710 },
        ],
        allrounders: [
          { rank: 1, name: "Shakib Al Hasan", country: "BAN", rating: 371 },
          { rank: 2, name: "Ravindra Jadeja", country: "IND", rating: 355 },
          { rank: 3, name: "Ben Stokes", country: "ENG", rating: 340 },
        ]
      },
      test: {
        team: [
          { rank: 1, name: "India", rating: 124 },
          { rank: 2, name: "Australia", rating: 120 },
          { rank: 3, name: "England", rating: 114 },
        ],
        batsmen: [
          { rank: 1, name: "Kane Williamson", country: "NZ", rating: 859 },
          { rank: 2, name: "Steve Smith", country: "AUS", rating: 842 },
          { rank: 3, name: "Joe Root", country: "ENG", rating: 828 },
        ],
        bowlers: [
          { rank: 1, name: "Ravichandran Ashwin", country: "IND", rating: 870 },
          { rank: 2, name: "Pat Cummins", country: "AUS", rating: 860 },
        ],
        allrounders: [
          { rank: 1, name: "Ravindra Jadeja", country: "IND", rating: 455 },
          { rank: 2, name: "Ben Stokes", country: "ENG", rating: 440 },
        ]
      },
      t20: {
        team: [
          { rank: 1, name: "India", rating: 266 },
          { rank: 2, name: "England", rating: 261 },
          { rank: 3, name: "Australia", rating: 256 },
        ],
        batsmen: [
          { rank: 1, name: "Suryakumar Yadav", country: "IND", rating: 875 },
          { rank: 2, name: "Babar Azam", country: "PAK", rating: 820 },
        ],
        bowlers: [
          { rank: 1, name: "Wanindu Hasaranga", country: "SL", rating: 694 },
          { rank: 2, name: "Rashid Khan", country: "AFG", rating: 687 },
        ],
        allrounders: [
          { rank: 1, name: "Shakib Al Hasan", country: "BAN", rating: 290 },
          { rank: 2, name: "Hardik Pandya", country: "IND", rating: 275 },
        ]
      }
    },
    women: {
      odi: {
        team: [
          { rank: 1, name: "Australia", rating: 160 },
          { rank: 2, name: "England", rating: 140 },
          { rank: 3, name: "India", rating: 135 },
        ],
        batsmen: [
          { rank: 1, name: "Alyssa Healy", country: "AUS", rating: 785 },
          { rank: 2, name: "Smriti Mandhana", country: "IND", rating: 770 },
        ],
        bowlers: [
          { rank: 1, name: "Sophie Ecclestone", country: "ENG", rating: 730 },
          { rank: 2, name: "Rajeshwari Gayakwad", country: "IND", rating: 700 },
        ],
        allrounders: [
          { rank: 1, name: "Ellyse Perry", country: "AUS", rating: 400 },
          { rank: 2, name: "Deepti Sharma", country: "IND", rating: 375 },
        ]
      },
      test: {
        // Add if needed
        team: [],
        batsmen: [],
        bowlers: [],
        allrounders: []
      },
      t20: {
        team: [
          { rank: 1, name: "Australia", rating: 290 },
          { rank: 2, name: "England", rating: 275 },
          { rank: 3, name: "India", rating: 260 },
        ],
        batsmen: [
          { rank: 1, name: "Beth Mooney", country: "AUS", rating: 800 },
          { rank: 2, name: "Harmanpreet Kaur", country: "IND", rating: 780 },
        ],
        bowlers: [
          { rank: 1, name: "Sophie Ecclestone", country: "ENG", rating: 730 },
          { rank: 2, name: "Deepti Sharma", country: "IND", rating: 710 },
        ],
        allrounders: [
          { rank: 1, name: "Ashleigh Gardner", country: "AUS", rating: 395 },
          { rank: 2, name: "Natalie Sciver", country: "ENG", rating: 385 },
        ]
      }
    }
  };