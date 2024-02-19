import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export default function SingOut(probs) {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <MenuItem>
                    <Button primary onClick={probs.signIn}>Giriş Yap</Button>
                    <Button onClick={() => navigate("/register") } primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
                </MenuItem>
            </div>
        </div>
    )
}
