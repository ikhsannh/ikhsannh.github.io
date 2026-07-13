import LeftComponent from "@/components/miniComponents/LeftComponent";
import RightComponent from "@/components/miniComponents/RightComponent";

export default function Home() {
  return (

    <main>
      <div className='flex-col lg:flex justify-around custom-md:mt-[20rem] lg:mt-[7rem]'>
        <LeftComponent />
        <br />
      </div>
      <div className="lg:mt-[-8rem]">
        <RightComponent />
      </div>
    </main>
  )
}











