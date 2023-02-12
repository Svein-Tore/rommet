<script>
    let feeds=[]
    const hentData=async () => {
        const data =await fetch("https://api.thingspeak.com/channels/2022245/feeds.json")
        const json= await data.json()
        feeds=json.feeds
    }
    hentData()
</script>
<style>
    td,th,table {
        text-align:center;
        border:1px solid black;
        border-collapse: collapse;
        padding:10px;
    }
    table {
        position: absolute;
        left:300px;
        top:300px;
        width:50%
    }
    h1 {
        position: absolute;
        left:600px;
        top:200px;
    }
</style>
<h1>Oversikt over måledata</h1>
<table>
    <tr>
        <th>Måledato:</th>
        <th>klokkeslett:</th>
        <th>rom nummer:</th>
    </tr>
    {#each feeds as field}
        <tr>
            <td>{field.created_at.substr(8,2)+"/"+field.created_at.substr(5,2)+"-"+field.created_at.substr(0,4)}</td>
            <td>{field.created_at.substr(11,8)}</td>
            <td>{field.field1}</td>
        </tr>
    {/each}
</table>