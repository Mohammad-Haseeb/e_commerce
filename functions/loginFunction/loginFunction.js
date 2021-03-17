// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunadb = require('faunadb'),
  q = faunadb.query;
const handler = async (event) => {
  let data=JSON.parse(event.body).mail;
  try {
    var adminClient = new faunadb.Client({ secret: "fnAED8pYYbACBX4oQIKuRLQVTV7r5KsNBR7uVFlZ" });
    var result=await adminClient.query(
               q.Get(
               q.Match(q.Index("Login_info"),data)
               )
               );
           console.log(result);
       

    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ password: result.data.password , status:result.data.status}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
