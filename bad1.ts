export interface INotFoo {
    target: string; // doing refactor on target will change "target" on line 7... should not happen
}

function onClick(e) {
    e.preventDefault();
    if (e.target !== null) alert(e.target);
}