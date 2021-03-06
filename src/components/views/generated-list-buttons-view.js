import style from './generated-list-buttons.module.css'

export default function GeneratedListButtonsView(props) {
  return (
    <>
      {'showPreviousList' in props.item && <a className={`${style.cursor} text-primary`} onClick={props.item.showPreviousList}>Show older</a>}
      {('showBoth' in props.item && props.item.showBoth) && <span className="ml-2 mr-2">|</span>}
      {'showNextList' in props.item && <a className={`${style.cursor} text-primary`} onClick={props.item.showNextList}>Newer</a>}
    </>
  );
};