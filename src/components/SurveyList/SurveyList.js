/**
 * Component to list the surveys from the predefined survey data
 * @param {*} param 
 * @returns 
 */
const SurveyList = ({ surveys }) => {
    return (
        <div className="container mx-auto pt-10" role="main">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 overflow-y-auto">
                {surveys.map(survey => {
                    return (
                        <div className="survey h-full">
                            <div className="flex flex-row justify-items-start">
                                <div class="h-full space-x-8 my-2.5 ml-2">
                                    <img className="my-1.5 ml-3 sm:ml-1 h-28 w-36 md:h-28 md:w-28" src={process.env.PUBLIC_URL + `images/${survey.icon}`} alt={survey.name} />
                                </div>
                                <div className="p-3">
                                    <div className="font-bold text-2xl text-left">{survey.name}</div>
                                    <div className={`text-[12px] p-1 my-1 text-left  ${survey.status === 'New' ? 'w-10 bg-pink-400' : 'w-full bg-black'} text-white leading-4`}>{survey.status}</div>
                                    <div className="flex">
                                        <img className=" text-left my-1.5 h-5 w-5 md:h-5 md:w-5" src={process.env.PUBLIC_URL + "images/clock.png"} alt="Clock" />
                                        <span className="text-right ml-3 my-1 text-base font-medium">{survey.timeLeft}</span>
                                    </div>
                                    <div className="flex">
                                        <img className=" text-left my-1.5 h-5 w-5 md:h-5 md:w-5" src={process.env.PUBLIC_URL + "images/Questionmark.png"} alt="Clock" />
                                        <span className="text-right ml-3 my-1 text-base font-medium">{survey.qualifications}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-pink-400 h-12 rounded-md text-white flex justify-center items-center flex-col text-lg font-medium">
                                <div>{survey.price}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )

};
export default SurveyList;