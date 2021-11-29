// Lights
import React from "react";

export const KeyLight = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={3}
            height={3}
            color={color}
            intensity={brightness}
            position={[-2, 0, 5]}
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow
        />
    );
}

export const FillLight = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={3}
            height={3}
            intensity={brightness}
            color={color}
            position={[2, 1, 4]}
            lookAt={[0, 0, 0]}
            penumbra={2}
            castShadow
        />
    );
}

export const RimLight = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[1, 4, -2]}
            rotation={[0, 180, 0]}
            castShadow
        />
    );
}

