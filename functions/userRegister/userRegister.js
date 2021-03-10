const faunadb = require('faunadb'),
  q = faunadb.query;
const handler = async (event) => {
  let _data=JSON.parse(event.body);
  console.log("Data : ",_data);
  try {
    var adminClient = new faunadb.Client({ secret: "fnAED8pYYbACBX4oQIKuRLQVTV7r5KsNBR7uVFlZ" });
  
   
       let result=await adminClient.query(
           q.Create(
               q.Collection("UsersRegistration"),
               {data:_data},
     
           )
       );
       console.log("Database",result);

              console.log(" Created: " + result.ref.id);

    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    console.log("Error : ",error)
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
