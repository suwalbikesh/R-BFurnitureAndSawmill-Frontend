import Image from "next/legacy/image";


const Catagory = () => {
    const categories = [
        {
          index: 0,
          image: '/product/product1.png',
          title: 'Pine Timber',
          description: `is an Enterprise resource planning system which includes online learning platform, school/college management system as
                      well as Finance Management System. Schoolworkspro.com provide an outstanding academic experience for students, teachers and
                      administrators through flexible learning and expert teaching.`,
          link: 'https://schoolworkspro.com',
        },
        {
          index: 1,
          image: '/product/product2.png',
          title: 'Oak Timber',
          description: `is Nepal's online healthcare service providing platform aimed to bring change in healthcare services and
          make it easy to access for both healthcare service provider and patients.`,
          link: 'https://app.digimedicalsewa.com',
        },
        {
          index: 2,
          image: '/product/product3.png',
          title: 'Maple Timber',
          description: `is an IT Company that provides a variety of e-learning solutions, including web portal construction, learning apps, 
          virtual classrooms, School management software, technology equipment for learning aid and many more.`,
          link: 'https://digitechnologynepal.com',
        },
      ]
    return (
        <div className="relative -my-20">
            <div className="absolute md:w-[80%] mx-2 md:mx-auto md:-skew-x-[8deg] inset-0 bg-secondary transition-opacity md:rounded-xl duration-300"></div>
            <div className="container relative bg-transparent flex flex-col items-center gap-12 mx-auto pt-10 pb-16">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-2xl text-primary font-bold camalcase">Shop By <span className="text-secondary">Category</span></h1>
                    <h2 className="text-primary/70">Browse by Category – Find the Perfect Wood. </h2>
                    <div className='bg-gradient-to-r from-transparent via-[#e1af87] to-transparent h-[2px] w-[200px] mr-2'></div>
                </div>
                <div className="flex flex-wrap items-center justify-between w-[85%] px-10">
                    {categories.length && categories?.map((cat:any, index:number) =>
                    
                    <div key={index} className={`group hover:scale-105 duration-700 flex flex-col justify-center relative h-[300px] w-[250px] rounded-lg bg-primary`} >
                            <div className='relative h-[220px] w-[250px] rounded-lg'>
                                <Image src={cat.image} layout='fill' objectFit="cover" alt='' className="rounded-t-lg"/>
                            </div>
                        <div className="absolute scale-105 skew-y-2 rotate-[8deg] inset-0 bg-transparent transition-opacity rounded-lg group-hover:rotate-[188deg] transition-transform duration-700 ease-in-out border-2 border-[#e1af87]"></div>
                        <div className="text-center text-gray-900 bg-primary m-auto text-xl font-bold uppercase">
                            {cat.title}
                        </div>
                    </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default Catagory;