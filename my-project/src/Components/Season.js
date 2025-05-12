import Carts from './Carts';
import season1 from '../../public/assets/season1.png';
import season2 from '../../public/assets/season2.png';
import season3 from '../../public/assets/season3.png';

const ChooseCart = () => (
    <div>
        <h2 className='text-2xl text-center text-black my-[50px] font-black uppercase Montserrat'>In Season Now</h2>
        <p className='text-center mb-[28px] mx-auto'>
            Fresh, flavorful, and harvested at their peak — these seasonal picks are perfect for your table. <br />
            Enjoy nature's best, just when it's meant to be.
        </p>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-20'>
            <Carts img={season1} title='Cranberries' para='Bold, tangy, and bursting with freshness' />
            <Carts img={season3} title='Brussel Sprouts' para='Crisp, green, and packed with goodness' />
            <Carts img={season2} title='Sweet Potatoes' para='Earthy, sweet, and rich in flavor' />
        </div>
    </div>
);

export default ChooseCart;