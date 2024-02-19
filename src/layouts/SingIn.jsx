import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SingIn(probs) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" />
                <Dropdown pointing="top left" text='messi'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={probs.signOut}  text="Çıkış Yap" icon="info" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}
