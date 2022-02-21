export const getStaticPaths= async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();

const paths = data.map(abdul => {
    return{
        params:{id: abdul.id.toString()}
    }
})

return{
    paths,
    fallback:false
}

}

export const getStaticProps = async (context) =>{

const id = context.params.id;
const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
const data = await res.json();

return {
    props:{abdul:data}
}
}

const Details = ({abdul}) => {
    return (
      <>
        <h1>{abdul.name}</h1>
        <p>{abdul.email}</p>
        <p>{abdul.website}</p>
      </>
    );
}
 
export default Details;