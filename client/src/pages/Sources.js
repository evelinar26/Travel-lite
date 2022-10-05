function Sources() {
  return (
//     <p>Our sources:
//       <li> Gridwatch.co.uk </li>
//       <li> https://ourworldindata.org/travel-carbon-footprint </li>
//       <li> https://josephpoore.com/Science%20360%206392%20987%20-%20Accepted%20Manuscript.pdf </li>
//     </p>
//   )
// }

  <div className="flex justify-center mt-24">
    <div className="font-mono bg-zinc-100 border rounded-3xl flex justify-center box-border h-2/3 w-2/3 p-4 mb-40 ml-24 mr-24">
       <div className="flex justify-center"></div>
        <h1 className="inline text-center pb-4 text-3xl mt-10"> Our sources: </h1>
        <h2 className="inline text-center pb-4 text-2xl mt-10">
        <br></br>
        <br></br>
        <li> Gridwatch.co.uk </li>
        <br></br>
        <li> https://ourworldindata.org/travel-carbon-footprint </li>
        <br></br>
        <li> https://josephpoore.com/Science%20360%206392%20987%20-%20Accepted%20Manuscript.pdf </li></h2>
        <br></br>
        {/* If you are not redirected, click <span className="text-lime-600"><Link to="/" className="hover:bg-gray-200">here</Link></span>.</h1> */}
    </div>
</div>
  )
}

export default Sources;

  // bulbs avg year usage(8h) 79,400g CO2 source: Gridwatch.co.uk - https://savinglightbulb.wordpress.com/2018/10/11/how-much-co2-does-a-light-bulb-create/
  // beef 50,000g per serving https://josephpoore.com/Science%20360%206392%20987%20-%20Accepted%20Manuscript.pdf
  // planting one tree = 160,000g CO2 saved (source: treesforlife)
  // one shower = 3066 g (per 15 min shower - the eco guide)
  // cup of coffee - 280g (UCL)