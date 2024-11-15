import { useContext } from 'react';
import { SearchContext } from '../context/search';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdSell } from 'react-icons/md';
import { useModal } from '../context/modal';

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  const { openModal } = useModal();

  return (
    <div className={`${searchActive
      ? 'bg-white rounded-none xl:h-[80px]'
      : 'bg-white rounded-[20px] py-6 xl-pr-4 xl-h-[98px]'} 
      hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <div className="xl:h-full w-full flex items-center justify-between px-6 gap-x-6">
          <a href="mailto:Amcars6@outlook.com">
            <button className={`${searchActive ? 'btn btn-sm border border-black px-4 text-black font-semibold xl:w-[224px]' :
              'btn btn-lg btn-accent xl:w-[224px] px-4'}`}>
              <AiOutlineMail className="mr-2 text-xl" />
              Kontakt E-mail
            </button>
          </a>
          <a href="tel:+48530200082">
            <button className={`${searchActive ? 'btn btn-sm border border-black px-4 text-black font-semibold xl:w-[224px]' :
              'btn btn-lg btn-accent xl:w-[224px] font-semibold px-4'}`}>
              <FaPhoneAlt className="mr-2 text-xl" />
              Zadzwoń
            </button>
          </a>
          <button
            onClick={openModal}
            className={`${searchActive ? 'btn btn-sm border border-black px-4 text-black font-semibold xl:w-[224px]' :
              'btn btn-lg btn-accent xl:w-[224px] px-4'}`}
          >
            <MdSell className="mr-2 text-xl" />
            Sprzedaj Swój Samochód
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
