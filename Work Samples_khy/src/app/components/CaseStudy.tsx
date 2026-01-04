import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { CaseStudy as CaseStudyType } from "../data/portfolio-data";
import { TrendingUp, CircleCheck, Target } from "lucide-react";

interface CaseStudyProps {
  caseStudy: CaseStudyType;
  index: number;
}

export function CaseStudy({ caseStudy, index }: CaseStudyProps) {
  const colors = ["#06b6d4", "#0891b2", "#0e7490", "#155e75"];

  return (
    <section className="min-h-screen bg-white p-6 md:p-12 lg:p-16 xl:p-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <div className="bg-slate-950 text-cyan-400 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm tracking-widest uppercase">
              Case Study {index + 1}
            </div>
            <div className="text-slate-500 text-xs md:text-sm uppercase tracking-wider">
              {caseStudy.year}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-950 mb-3 md:mb-4 max-w-4xl">
            {caseStudy.topic}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-cyan-600 uppercase tracking-wider">
            {caseStudy.company}
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 bg-slate-50 p-8 border-l-4 border-cyan-500"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            {caseStudy.details}
          </p>
        </motion.div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-cyan-600" />
            <h3 className="text-xl text-slate-950 uppercase tracking-wide">
              Challenge
            </h3>
          </div>
          <p className="text-slate-700 leading-relaxed pl-9">
            {caseStudy.challenge}
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <CircleCheck className="w-6 h-6 text-cyan-600" />
            <h3 className="text-xl text-slate-950 uppercase tracking-wide">
              Approach
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
            {caseStudy.approach.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-slate-50 p-4 hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="min-w-8 min-h-8 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-700 leading-relaxed pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-cyan-600" />
            <h3 className="text-xl text-slate-950 uppercase tracking-wide">
              Impact & Results
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.impact.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-2 text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-sm uppercase tracking-wider mb-2 text-cyan-400">
                  {metric.metric}
                </div>
                <div className="text-slate-300 text-sm">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart */}
          {caseStudy.chartData && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6"
            >
              <h4 className="text-sm uppercase tracking-wider text-slate-950 mb-6">
                Performance Trend
              </h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={caseStudy.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "none",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {caseStudy.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {/* Table */}
          {caseStudy.tableData && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6"
            >
              <h4 className="text-sm uppercase tracking-wider text-slate-950 mb-6">
                Key Metrics Comparison
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-950">
                      <th className="text-left py-3 text-sm uppercase tracking-wider text-slate-950">
                        Metric
                      </th>
                      <th className="text-right py-3 text-sm uppercase tracking-wider text-slate-950">
                        Before
                      </th>
                      <th className="text-right py-3 text-sm uppercase tracking-wider text-slate-950">
                        After
                      </th>
                      <th className="text-right py-3 text-sm uppercase tracking-wider text-cyan-600">
                        Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudy.tableData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-200 hover:bg-white transition-colors duration-200"
                      >
                        <td className="py-4 text-slate-700">{row.category}</td>
                        <td className="py-4 text-right text-slate-600">{row.before}</td>
                        <td className="py-4 text-right text-slate-900">{row.after}</td>
                        <td className="py-4 text-right text-cyan-600">{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}