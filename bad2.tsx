

// doing refactor on itemId here inside the Component<> will also change w.itemId which is not even remotely the same type
const stuff: Component<{ itemId: string }> = ({itemId}) => <div>{itemId}</div>;

const bad: Component<{ what: { itemId: number}[] }> = ({what}) =>
    <div>{_(what).filter((w) => w.itemId )}</div>;

