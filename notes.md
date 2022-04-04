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