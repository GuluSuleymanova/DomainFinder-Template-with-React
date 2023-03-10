import { Card } from 'antd'
import React from 'react'
import TagButtons from '../../../libs/Buttons';

const TagCardItem = (props) => {
    let{title, tags}=props;
  return (
    <Card>
      <h5>{title}</h5>
        <div className='d-flex gap-3 flex-wrap'>
            {tags.map((tag, index)=>{
                return (
                    <TagButtons key={ index} >{tag}</TagButtons>

                )
            })}
        </div>

    </Card>
  )
}

export default TagCardItem