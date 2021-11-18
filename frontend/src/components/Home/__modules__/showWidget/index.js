import React from 'react';

const ShowWidget = ({
    children,
    condition,
    fallback = null,
}) => {
    if (!condition && fallback) {
        return <>{fallback}</>;
    }

    if (!condition) {
        return null;
    }

    return <>{children}</>;
};
export default ShowWidget;
