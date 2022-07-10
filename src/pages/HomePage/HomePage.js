import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './HomePage.ctrl'
import DebateGallery from '../../components/Debate/gallery'
import Gallery from '../../components/Gallery'
import {Wrapper} from '../../App.styles'
import { useNavigate } from 'react-router-dom'

export default observer(() => {
    const navigate = useNavigate()

    return (
            <Wrapper>
                <h3>Debates</h3>
                <Gallery items={ctrl.debates} Component={DebateGallery} onClick={id => navigate(`/debate/${id}`)} />
                <div style={{ marginTop: 30 }}>
                    <input type="text" value={ctrl.newDebate.name} onChange={e => ctrl.changeName(e.target.value)}/>
                    <button onClick={ctrl.addDebate}>Add debate</button>
                </div>
            </Wrapper>
        )
    }
)