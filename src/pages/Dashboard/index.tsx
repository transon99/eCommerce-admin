const Dashboard = () => {
  return (
    <div className='h-[calc(100vh-88px)] overflow-auto'>
      <div className='p-5 grid gap-5 overflow-hidden grid-cols-1  xl:grid-cols-4 auto-rows-[minmax(180px,auto)] text-white'>
        <div className='p-5 rounded-xl bg-[#171F29] xl:row-span-3 xl:col-span-1'>
          {/* <ChartBox {...chartBoxUser} Icon={FaEye} /> */}
          Box1
        </div>
        <div className='p-5 rounded-xl bg-[#171F29]'>{/* <ChartBox {...chartBoxUser} Icon={FaEye} /> */}Box2</div>
        <div className='p-5 rounded-xl bg-[#171F29]'>{/* <ChartBox {...chartBoxUser} Icon={FaEye} /> */}Box3</div>
        <div className='p-5 rounded-xl bg-[#171F29] xl:col-span-1 xl:row-span-3 flex justify-between items-center flex-col'>
          {/* <DoughnutChart /> */}
          <p className='ali'>Sold by category</p>
        </div>
        <div className='p-5 rounded-xl bg-[#171F29] '>{/* <ChartBox {...chartBoxUser} Icon={FaEye} /> */}Box4</div>
        <div className='p-5 rounded-xl bg-[#171F29] '>{/* <ChartBox {...chartBoxUser} Icon={FaEye} /> */}Box5</div>
        <div className='p-5 rounded-xl bg-[#171F29] xl:col-span-2 xl:row-span-2'>
          {/* <ChartBox {...chartBoxUser} Icon={FaEye} /> */}Box7
        </div>
        <div className='p-5 rounded-xl bg-[#171F29] '>{/* <LineChart /> */}Box8</div>
        <div className='p-5 rounded-xl bg-[#171F29] '>{/* <LineChart /> */}Box8</div>
      </div>
    </div>
  )
}

export default Dashboard
