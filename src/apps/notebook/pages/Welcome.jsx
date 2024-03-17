// import global components
import PageCenter from '../../globals/components/PageCenter'
// import local assets
import { images } from '../assets/images'

export default function Welcome() {
  return (
    <>
      <PageCenter bg="bg-gradient-to-b from-mainBlue from-10% to-mainwhite to-60% overflow-y-scroll place-content-evenly">
        <img src={images.welcome} alt="" className="h-auto w-3/4 " />

        <div className="space-y-5 px-5 text-center">
          <h1 className=" text-xl font-bold">Welcome to Simple ToDo</h1>
          <p className="">
            A simple ToDo app taken on another level. This is my first React
            project. I'll be showing all I've learnt so far.
          </p>
          <p className="text-lg text-mainBlue">
            Organise your tasks in one place.
          </p>
        </div>

        <button className="w-full rounded-lg bg-mainBlue p-3 text-mainwhite">
          Open Simple ToDo
        </button>
      </PageCenter>
    </>
  )
}
