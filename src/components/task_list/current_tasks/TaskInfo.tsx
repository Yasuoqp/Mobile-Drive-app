import React, { FC } from 'react';
import s from '@/styles/taskInfo.module.scss';
import { Form } from 'react-router-dom';
import CustomButton from '@/common/CustomButton';

interface Props {
  infoTask: any;
}

const TaskInfo: FC<Props> = (props) => {
  const { infoTask } = props;

  return (
    <div>
      <div className={s.mainContainer}>
        <div className={s.data}>
          <div>
            <h3>Дата :</h3>
            <span>{infoTask.date}</span>
          </div>
          <div>
            <h3>Номер :</h3>
            <span>№ {infoTask.id}</span>
          </div>
        </div>

        <div>
          <h3>Коментарий :</h3>
          <span>{infoTask.description}</span>
        </div>

        <div>
          <h3>Cтатус :</h3>
          <span>{infoTask.status}.</span>
        </div>

        <div>
          <h3>Маршрут :</h3>
          <span>{infoTask.route}</span>
        </div>

        <div>
          <h3>Товар :</h3>
          <span>{infoTask.product}</span>
        </div>

        <div>
          <h3>Грузо получатель : </h3>
          <span>{infoTask.title}</span>
        </div>

        <div className={s.btnContainer}>
          <div className={s.acceptTask}>
            <Form style={{ width: '45%' }} method="put">
              <input type="text" defaultValue="в пути" name={'status'} />
              <input type="checkbox" defaultValue="true" checked name={'urgency'} />
              <input type="checkbox" defaultValue="false" defaultChecked={true} name={'isActive'} />
              <CustomButton color={'rgba(69, 177, 51, 0.73)'} name={'Принять заказ'} />
            </Form>

            <Form style={{ width: '45%' }} method="put">
              <input type="text" defaultValue="Ожидание" name={'status'} />
              <input type="checkbox" defaultValue="false" defaultChecked={true} name={'urgency'} />
              <input type="checkbox" defaultValue="false" defaultChecked={true} name={'isActive'} />
              <CustomButton color={'rgba(245, 157, 53, 0.87)'} name={'Поставь удержание'} />
            </Form>
          </div>

          <div style={{ margin: '0 10px' }}>
            <Form method="put">
              <input type="text" defaultValue="Завершенно" name={'status'} />
              <input type="checkbox" defaultValue="false" defaultChecked={true} name={'urgency'} />
              <input type="checkbox" defaultValue="true" defaultChecked={true} name={'isActive'} />
              <CustomButton
                color={'rgba(227, 24, 24, 0.74)'}
                width={'100%'}
                name={'Завершить заказ'}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
