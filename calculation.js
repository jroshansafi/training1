
1. Cost for the concert
classical - 40000 Base Rate
    Audience More than 30, for each person 1000 rs
eighties - 30000 base rate, more than 500 for each person + a flat rate of 10000
latest - 80000 flat rate

2. Volume Credits
   a) classical - 1 credit for every person more than 30 
   b) eighties - 1 credit for every 5 person

const invoice =
    {
        "customer": "ABC Event Management & Co",
        "performances": [
            {
                "concertType": "classical",
                "audience": 55
            },
            {
                "concertType": "eighties",
                "audience": 35
            },
            {
                "concertType": "classical",
                "audience": 40
            }
        ]
    }


    Answer:
    1. classical => Base Rate= 40,000 + extra persons(25) 25*1000= 25000 = 65,000
    volume credits = 25
    2. Eightees => Base Rate= 30,000 + extra persons(5) 5*500= 2500 + flat rate 10,000 = 42,500
    volume credits = 1(1 for 5 person )
    3. classical => Base Rate= 40,000 + extra persons(10) 10*1000= 10000 = 50,000
    volume credits = 10

    Total Cost : 65,000+42,500+50,000 = 1,57,500
    Total volume credits: 25+1+10= 36




// Points To Remember: When you see a word "for every" - It means there is a multiplication

// If you see more than or less than - there is subtraction
// If you see "per" there is a division
// Theses are some simple words to math translation rules you can apply in your daily coding tasks (edited) 
