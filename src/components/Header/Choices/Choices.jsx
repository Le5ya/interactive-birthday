import { useState,} from 'react';
//import { holidaysContext } from '../../../context/holidaysContext';
import style from './Choices.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday } from '../../../store/holidaySlice';

const Choices = () => {
	const [isOpenChoices, setIsOpenChoices] = useState(false);
	const { holiday, holidays } = useSelector(state => state.holidays);
	const dispatch = useDispatch();
	
	const toggleChoices = () => {
		setIsOpenChoices(!isOpenChoices)
	};
	
	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={toggleChoices}>
				{holidays[holiday] || 'Выбрать праздник'}
			</button>
			{isOpenChoices && (
				<ul className={style.list}>
					{Object.entries(holidays).map((item) => (
						<li
							className={style.item} 
							key={item[0]}
							onClick={() => {
								dispatch(setHoliday(item[0]));
								toggleChoices();
							}}
						>
							{item[1]}
						</li>
					))}
				</ul>
			)}
			
		</div>
	)
}
export default Choices
