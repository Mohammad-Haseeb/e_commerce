// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunadb = require('faunadb'),
  q = faunadb.query;
const handler = async (event) => {
  let idArray=[];
  try {
    var adminClient = new faunadb.Client({ secret: "fnAED8pYYbACBX4oQIKuRLQVTV7r5KsNBR7uVFlZ" });
    var result =await adminClient.query(
                  q.Map(
                    q.Paginate(q.Documents(q.Collection("Products"))),
                    q.Lambda("X", q.Get(q.Var("X")))
                  )
                );
                console.log("Result : ",result.data[0].ref.id);
                
    const subject = event.queryStringParameters.name || 'World'
    for(let i=0;i< result.data;++i){
      console.log("ya :", result.data[i].ref.id);

      console.log("ye ho")
       

}
    return {

      statusCode: 200,
      body: JSON.stringify({ message:result.data}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
