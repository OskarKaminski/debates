import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './QuestionsPage.ctrl'
import NarrationGallery from '../../components/Narration/gallery'
import List from '../../components/List'
import {Wrapper} from '../../App.styles'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

export default observer(() => {
    const navigate = useNavigate()

    return (
            <Wrapper>
                <h3>Questions</h3>
                <List items={ctrl.narrations} Component={NarrationGallery} onClick={id => navigate(`/narration/${id}`)} />

                <br/>
                <Button name="Ask your question" color="#7749F8" onClick={() => navigate(`/add-your-question`)}/>
            </Wrapper>
        )
    }
)