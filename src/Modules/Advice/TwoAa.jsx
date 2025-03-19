import img1 from '../../assets/vector.png';
import img2 from '../../assets/spices.png';
import img3 from '../../assets/vectora.png';



function TwoAa() {
    return(
        <>
        <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14">

          <div className='relative font-primary-mid font-bold text-[35px] sm:text-[35px] md:text-[40px] tracking-wide text-center my-10 sm:my-10 md:my-20'>
            <span className="text-[#D95103] before:absolute before:left-[210px] before:-top-2  before:content-none sm:before:content-none md:before:content-none xl:before:content-[url('assets/brusha.png')] after:absolute after:right-[210px] after:-top-2  after:content-none sm:after:content-none md:after:content-none xl:after:content-[url('assets/brusha.png')]">Ingredient's</span> Used</div>

          
          <div className=" relative w-full min-h-screen flex flex-col items-center justify-center">
            <img src={img1} alt='background_img' className="absolute left-[-13px] sm:left-[-10px] md:left-[0px] lg:left-[55px] xl:left-[200px] 2xl:left-[250px] top-[30px] w-[380px] h-[340px]"/>
            <img src={img2} alt='background_img' className="absolute top-[520px] w-[1400px] h-[800px]"/>
            <img src={img3} alt='background_img' className="absolute  right-[-12px] sm:right-[-12px] md:right-[10px] lg:right-[51px] xl:right-[205px] 2xl:right-[275px]  top-[1852px] sm:top-[1589px] md:top-[1765px] lg:top-[1780px] bottom-0 w-[230px] h-[260px]"/>


            <div className="relative flex flex-col mt-12 space-y-6 items-center w-full max-w-2xl z-10">
            {[
               {
                title: "For the Dough",
                items: [
                  "120 gms refined flour",
                  "1/4 tsp baking powder",
                  "1/2 tsp salt water (for kneading)",
                ],
              },
              {
                title: "For the Chicken Filling",
                items: [
                  "1 cup chicken (minced)",
                  "1/2 cup onions, finely chopped",
                  "1/4 tsp black pepper powder",
                  "1 tbsp oil",
                  "1/2 tsp garlic paste",
                  "1/2 tsp soya sauce",
                  "Salt",
                  "1/4 tsp vinegar",
                ],
              },
              {
                title: "For the Vegetarian Filling",
                items: [
                  "1 cup cabbage and carrots, grated",
                  "2 tbsp onions, finely chopped",
                  "1/2 tsp garlic, finely chopped",
                  "1 tbsp oil",
                  "1/4 tsp vinegar",
                  "1/2 tsp soya sauce",
                  "Salt to taste",
                  "Pepper to taste",
                  "1 tbsp cornflour",
                ],
              },
              {
                title: "For Chilli Sauce",
                items: [
                  "25 grams garlic, peeled",
                  "6 gms whole red chillies",
                  "3 tbsp vinegar",
                  "1 tbsp oil",
                  "Salt to taste",
                  "Sugar to taste",
                ],
              },
            ].map((section,index) => (
              <div key={index} className="font-primary-head border-4 border-[#287A78] p-6 rounded-lg w-full bg-white bg-opacity-80 mb-10">
                <h2  className="text-[25px] font-bold pl-6">{section.title}</h2>
                <ul className="list-none pl-6 pt-5 space-y-5">
                  {section.items.map((item, i) => (
                    <li key={i} className="relative flex items-center">
                      <span className="absolute top-2 left-0 w-3 h-3 border-2 border-[#D95103] bg-white rounded-full inline-block mr-3"></span>
                      <span className="flex-1 text-[16px] sm:text-[16px] md:text-[20px] font-medium border-b border-gray-300 pb-1 pl-8">{item}</span>
                    </li>
                  ))}
                  
                </ul>
              </div>
            )

            )
            
            }
            </div>

          </div>
        

       

        </div>
        </>
    );
}
export default TwoAa