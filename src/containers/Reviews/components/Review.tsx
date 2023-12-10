import './Review.scss'

type ReviewProps = {
    avatar?: string,
    name?: string,
    message: string,
    profession: string
}

export const Review = ({ avatar, name, message, profession }: ReviewProps) => {
    return (
        <div className="feedback">
            <div className="feedback__decor">
                <svg width="100" height="15" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60845 0L9.96414 4.75768L15.2169 5.52786L11.42 9.23846L12.3107 14.4721L7.60845 12.0077L2.90617 14.4721L3.79688 9.23846L0 5.52786L5.25277 4.75768L7.60845 0Z" fill="#00C26F"></path><path d="M48.753 0L51.1087 4.75768L56.3614 5.52786L52.5646 9.23846L53.4553 14.4721L48.753 12.0077L44.0507 14.4721L44.9414 9.23846L41.1445 5.52786L46.3973 4.75768L48.753 0Z" fill="#00C26F"></path><path d="M28.1788 0L30.5344 4.75768L35.7872 5.52786L31.9903 9.23846L32.881 14.4721L28.1788 12.0077L23.4765 14.4721L24.3672 9.23846L20.5703 5.52786L25.8231 4.75768L28.1788 0Z" fill="#00C26F"></path><path d="M69.3233 0L71.679 4.75768L76.9317 5.52786L73.1349 9.23846L74.0256 14.4721L69.3233 12.0077L64.621 14.4721L65.5117 9.23846L61.7148 5.52786L66.9676 4.75768L69.3233 0Z" fill="#00C26F"></path><path d="M89.8936 0L92.2493 4.75768L97.5021 5.52786L93.7052 9.23846L94.5959 14.4721L89.8936 12.0077L85.1913 14.4721L86.082 9.23846L82.2852 5.52786L87.5379 4.75768L89.8936 0Z" fill="#00C26F"></path></svg>
            </div>
            <p className="feedback__text">{message}</p>

            <div className="feedback__user">
                <div className="feedback__avatar">
                    <img src={avatar} alt="avatar" className="feedback__img" />
                </div>
                <div className="feedback__user-info">
                    <div className="feedback__user-name">{name}</div>
                    <div className="feedback__user-profession">{profession}</div>
                </div>

            </div>

        </div>
    )
}
