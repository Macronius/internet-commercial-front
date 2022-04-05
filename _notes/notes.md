QUESTION:
        https://stackoverflow.com/questions/43109625/propublica-api-authenticate-key-with-javascript
ANSWER:
        https://stackoverflow.com/questions/43109625/propublica-api-authenticate-key-with-javascript





// ====== CONTENT ========================
ProPublica.org API
const congress_api_key = "6LCyfn1EQDPvp8LbPvBt7QzxdesRxgstDwR87bFN";

ProPublica Congress API - floor actions
https://projects.propublica.org/api-docs/congress-api/other/#floor-actions


ProPublica Congress API - bills
https://projects.propublica.org/api-docs/congress-api/bills/

NOTE: current congress is 117

https://api.propublica.org/congress/{version}/

curl "https://api.propublica.org/congress/v1/senate/floor_updates.json"
  -H "X-API-Key: PROPUBLICA_API_KEY"

curl "https://api.propublica.org/congress/v1/senate/floor_updates.json"
  -H "X-API-Key: 6LCyfn1EQDPvp8LbPvBt7QzxdesRxgstDwR87bFN"
  




//NOTE: <UserContext.Provider> is an alias component that allows us to use this user context provider and wrap the children
    //NOTE: receives the value, which will hold the actual contextual values
    // we want to store an 'authenticated user object'




// FROM user.context.js
/* 

The majority of code that has to do with fetching and keeping track of what the user value is,
should probably be kept in the same place where we are also storing it.

1. mount it on componentMount by using useEffect with empty dependency array

*/



DESIGN NOTES:

- ALWAYS RETURN A NEW OBJECT OR ARRAY
    - 1. it is best to never change the original data
    - 2. react will not register change in an object if only a value mutates, but it an entirely new object returns... all due to how React renders







TASK: upload the "json" data to the firebase database
create a method that allows us to upload these categories from that shop_data up into their respective collections up in Firestore
note: collectionKey is like users or products
note: because adding to an external source, this will most likely be async behavior

QUESTION: how to actually create the collection when it doesn't already exist
ANSWER: as we know about userDocRef (user document references), as long as we try to find something in the database, regardless of whether or not it is actually already there, Firebase will then create one for us, even if it is empty, i.e., the reference is made

store each of these objects inside of this new collectionRef as a new document (since we are writing multiple different documents into a collection, therefore, we need to think about the concept of transactions)
__TRANSACTION__ - a successfull unit of work to a database
__UNIT OF WORK__ - might require multiple write-events (e.x., transfer money from one bank account to another: one account decrease, one account increase)  in this example, both writes to the bank accounts must succeed for the 'transaction' to be successfull
__BATCH__ - use the 'writeBatch' method from firestore



DATA STRUCTURE:
NOTE: this is the format of the data in the database
{
    hats: {
        title: 'Hats',
        items: [
            {},
            {},
        ]
    },
    sneakers: {
        title: 'Sneakers',
        items: [
            {},
            {},
        ]
    }
}
NOTE: helper function to isolate areas that might change from other areas (in this particular case, from third party libraries)
this allows the developer to be able to put all of the firebase methods into a single helper-function, in case it changes later, and breaks the code, then all the developer has to do is correct the single function.
NOTE: patterns and frameworks are constantly changing
PATTERN:





**CATEGORY PREVIEW**










**STYLED COMPONENTS**
generates unique class names