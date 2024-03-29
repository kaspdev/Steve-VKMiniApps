import React from "react";
import { Group, Div } from "@vkontakte/vkui";

import { SkinPreview } from "../../components";
import { Skins } from "./Skins";

export function Skin({ user, setUser }) {

    return (
        <>
            <Group mode="plain">
                <Div>
                    <SkinPreview skin={user.skin.url}
                                 cape={user.skin.cape ? `data:image/png;base64,${user.skin.cape}` : ""}
                                 isSlim={user.skin.isSlim}
                                 username={user.username}
                                 style={{ borderRadius: 10 }}
                    />
                </Div>
            </Group>
            {
                user.skin.history.length !== 0 && <Skins user={user} setUser={setUser}/>
            }
        </>
    );
}
