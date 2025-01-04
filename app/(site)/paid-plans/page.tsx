// app/coaching-plans/page.tsx

import { fetchCoachingPlan } from "../../../sanity/sanity-utils";
import PlanImageCard from "./PlanImageCard";

const CoachingPlansPage = async () => {
  const plans = await fetchCoachingPlan();
  console.log("plans ---> ", plans);

  return (
    <div className="container mx-auto py-10">
      {/* Centered Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Coaching Plans</h1>

      {/* Centered Arabic Text */}
      <div className="text-lg text-center text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
        اختار الباقه المناسبه لاحتياجك و ملء الإستمارة بالبيانات المطلوبة 
        و سيتم التواصل معك في أقرب وقت و بحد أقصي 48 ساعة
      </div>

      {/* Button Section */}
      <div className="text-center mb-10">
        <a href="https://tally.so/r/nWzOpR" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 text-white font-semibold rounded-md" style={{ backgroundColor: "#fda72b" }}>
          إستمارة المتابعة أونلاين
        </a>
      </div>

      {/* Coaching Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <PlanImageCard key={plan._id} title={plan.title} description={plan?.description} imageUrl={plan?.image} />
        ))}
      </div>
    </div>
  );
};

export default CoachingPlansPage;
