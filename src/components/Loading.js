import loadingGif from '../assets/images/loadinggif.gif'
const Loading = () => {
  return (
    <div className="w-full m-auto max-w-[1640px] h-[100vh] bg-white fixed top-0 z-20 flex items-center justify-center">
        <div className='overflow-hidden w-[200px] '><img className='w-full h-full object-cover' src={loadingGif} alt="" /></div>
    </div>
  )
}

export default Loading