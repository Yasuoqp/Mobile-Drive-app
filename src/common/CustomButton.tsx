import React, {FC} from 'react';
import s from '../styles/customButton.module.scss'

interface Props {
    color?: string;
    name?: React.ReactNode;
    width?: string;
    onClick?: () => void;
    disabled?: boolean,
    marginLeftCustom?: string
}

const CustomButton: FC<Props> = props => {

    const {disabled, name, color, width, onClick, marginLeftCustom} = props

    return (
        <button
            className={s.btn}
            onClick={onClick}
            type='submit'
            disabled={disabled}
            style={{
                width: width,
                backgroundColor: color,
                marginLeft: marginLeftCustom

            }}
        >
            {name}
        </button>
    );
};

export default CustomButton;