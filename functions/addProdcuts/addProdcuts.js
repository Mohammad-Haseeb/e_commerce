// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunadb = require('faunadb'),
  q = faunadb.query;
const handler = async (event) => {
  let _data=JSON.parse(event.body);
  try {


    var adminClient = new faunadb.Client({ secret: "fnAED8pYYbACBX4oQIKuRLQVTV7r5KsNBR7uVFlZ" });
  
   
    let result=await adminClient.query(
        q.Create(
            q.Collection("Products"),
            {data:_data},
  
        )
    );
    console.log("Database",result);
   
    const subject = event.queryStringParameters.name || 'World'
 
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
