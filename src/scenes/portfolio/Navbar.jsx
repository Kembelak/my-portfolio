import React ,{useState}from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../../hooks/UseMediaQuery';
import menuIcon from "../../assets/menu-icon.svg"
import closeIcon from "../../assets/close-icon.svg"

const Link = ({page,selectedPage,setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow": ""} 
            hover:text-yellow transtion duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopOfPage,selctedPage,setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
    const navbarBackground = isTopOfPage ? "": "bg-red opacity-80 text-blue";

  return (
    <nav className={`${navbarBackground} z-40 w-full  fixed top-0 py-6`}>
        <div className={`flex items-center z-40 justify-between mx-auto w-5/6`}>
            <h2 className='font-playfair text-2xl font-bold'>WILLY</h2>

            {/* {Desktop Nav} */}
            {isAboveSmallScreens ? (
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <Link 
                        page="Home"
                        selectedPage={selctedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    <Link 
                        page="Skills"
                        selectedPage={selctedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    <Link 
                        page="Projects"
                        selectedPage={selctedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    <Link 
                        page="Contact"
                        selectedPage={selctedPage}
                        setSelectedPage={setSelectedPage}
                        />
                </div>
            ):(
                <button
                    className="rounded-full bg-red p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img alt="menu-icon" src={menuIcon}/>
                </button>)}
                {/*  MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled &&(
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]' >
                        {/* CLOSE ICON */}
                        <div className='flex justify-end p-12'>
                            <button 
                                onClick={()=> setIsMenuToggled(!isMenuToggled)}
                            >
                                <img alt="close-icon" src={closeIcon}/>
                            </button>
                        </div>
                        {/* MENU ITEMS */}
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            <Link 
                                page="Home"
                                selectedPage={selctedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Skills"
                                selectedPage={selctedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Projects"
                                selectedPage={selctedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Contact"
                                selectedPage={selctedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
        </div>

    </nav>
  )
}

export default Navbar