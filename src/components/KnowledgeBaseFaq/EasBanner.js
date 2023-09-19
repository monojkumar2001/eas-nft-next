import style from '../../styles/easbanner.module.css'
const EasBanner = ({title}) => {
  return (
    <>
      <div className={style.knowledge_base_banner}>
        <div className={style.knowledge_base_banner_wrapper}>
          <h2 className={style.eas_knowledge_title}>{title}</h2>
        </div>
      </div>
    </>
  )
}

export default EasBanner