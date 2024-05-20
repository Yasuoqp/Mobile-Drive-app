import React, {FC} from 'react';
import s from '@/styles/task.module.scss';
import {ITask} from "@/model/ITask";
import {ReactComponent as Close} from '@/common/svg/close_icon.svg';
import {Form} from "react-router-dom";

interface Props {
    tasks: ITask[];
}

const CompletedTasks: FC<Props> = (props) => {
    const {tasks} = props;
    return (
        <>
            {tasks.length >= 1 &&
                tasks.map((item: any) => {
                    return (
                        <div className={s.completed_tasks}>
                            <Form method="put" className={s.form}>
                                <input type="checkbox" defaultValue="false" defaultChecked={true} name={'isActive'}/>
                                <input  defaultValue={item.id}  name={'id'}/>
                                <input  defaultValue={'Ожидание'}  name={'status'}/>
                                <button type={'submit'}><Close/></button>
                            </Form>
                            <div key={item.id} className={s.content}>
                                <div style={{width: '70%'}}>
                                    <h3 className={s.title}>{item.title}</h3>
                                    <span>{item.delivery_status}</span>
                                </div>
                                <div className={s.time_container}>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default CompletedTasks;