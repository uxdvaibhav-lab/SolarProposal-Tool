import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Download, Share2, Sun } from "lucide-react";
import { useState } from "react";
import thumbHero from "@/assets/thumb-hero.jpg";
import thumbCompany from "@/assets/thumb-company.jpg";
import thumbSystem from "@/assets/thumb-system.jpg";
import thumbInvestment from "@/assets/thumb-investment.jpg";
import thumbTimeline from "@/assets/thumb-timeline.jpg";
import thumbBenefits from "@/assets/thumb-benefits.jpg";
import thumbSteps from "@/assets/thumb-steps.jpg";

const PreviewProposal = () => {
  const navigate = useNavigate();
  const [financingOption, setFinancingOption] = useState<'cash' | 'loan' | 'lease'>('loan');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="font-semibold text-lg tracking-tight">Solar Proposal Preview</h1>
              <p className="text-sm text-muted-foreground">Client Ready View</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8 max-w-5xl">
        {/* Section 1: Personalized Cover Letter */}
        <section className="bg-white text-gray-900 rounded-lg border border-gray-200 p-6 sm:p-8 mb-6 animate-in fade-in duration-700 delay-100">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">A Solar Solution, Designed for You</h2>
            <p className="text-lg text-gray-900/90 leading-relaxed">
              Hi Alisa, based on our conversation about your energy independence and rising electricity bills,
              here's a solar solution tailored specifically for your home at 125 Maple Drive, Sunnyvale, CA.
              With the Federal ITC at 30% through 2032, now is the perfect time to lock in substantial savings
              and secure your energy future.
            </p>
          </div>
        </section>

        {/* Section 2: Why Solar Now? */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Solar Now?</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Your electricity bills have increased 12% annually, but solar locks in your rates for 25 years.
              The Federal tax credit of 30% is available now but begins declining in 2026. Your neighbors are
              already saving—average payback in your area is just 6.2 years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-orange-200 rounded-lg p-4">
                <div className="font-semibold text-orange-900 mb-1">Energy Independence</div>
                <p className="text-sm text-orange-700">Protect against future rate hikes</p>
              </div>
              <div className="border border-orange-200 rounded-lg p-4">
                <div className="font-semibold text-orange-900 mb-1">30% Tax Credit</div>
                <p className="text-sm text-orange-700">Federal ITC expires soon</p>
              </div>
              <div className="border border-orange-200 rounded-lg p-4">
                <div className="font-semibold text-orange-900 mb-1">Carbon Offset</div>
                <p className="text-sm text-orange-700">Reduce environmental impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Current Situation Analysis */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Situation Analysis</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Current Monthly Bill</div>
                <div className="text-3xl font-bold text-gray-900">$245</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Annual Consumption</div>
                <div className="text-3xl font-bold text-gray-900">12,500 kWh</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Rate Increase</div>
                <div className="text-3xl font-medium text-orange-600">2.5%/year</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Without solar, your projected utility costs over 20 years could total $87,500, assuming current
              rate increases continue. That's money flowing out instead of building equity in your energy
              system.
            </p>
          </div>
        </section>

        {/* Section 4: How Solar Works for You */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-400">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Solar Works for You</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Solar panels capture sunlight → inverter converts to electricity → powers your home → excess flows
            to grid → you get credits. Unlike generic solar, we've customized this specifically for your roof
            orientation, your consumption pattern, and your energy goals.
          </p>
          <div className="border border-orange-200 rounded-lg p-4">
            <div className="font-semibold text-orange-900 mb-2">Your System Captures 94% of Peak Consumption</div>
            <p className="text-sm text-orange-700">
              Optimized for your east-facing slope and seasonal usage patterns
            </p>
          </div>
        </section>

        {/* Section 5: Your Customized Solar System */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Customized Solar System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50">
              <div className="text-sm text-gray-600 mb-1">System Size</div>
              <div className="text-5xl font-bold text-orange-600">12.5 kW</div>
            </div>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50">
              <div className="text-sm text-gray-600 mb-1">Panel Count</div>
              <div className="text-5xl font-bold text-orange-600">32</div>
            </div>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50">
              <div className="text-sm text-gray-600 mb-1">Annual Production</div>
              <div className="text-5xl font-bold text-orange-600">16,800 kWh</div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={thumbSystem}
              alt="Solar System Design" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-medium">3D rendering of your customized solar installation</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Panel Model</span>
              <span className="font-semibold text-gray-900">Canadian Solar HiKu6 Mono PERC 390W</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Inverter</span>
              <span className="font-semibold text-gray-900">Enphase IQ8+ Microinverters</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Racking System</span>
              <span className="font-semibold text-gray-900">IronRidge XR Rail System (Black)</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Monitoring</span>
              <span className="font-semibold text-gray-900">Enphase Enlighten (Mobile & Web)</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Performance Warranty</span>
              <span className="font-semibold text-gray-900">25 Years (90% output guarantee)</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-600">Installation Timeline</span>
              <span className="font-semibold text-gray-900">4-6 Weeks from Contract Signing</span>
            </div>
          </div>
        </section>

        {/* Section 6: What About Backup Power? */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What About Backup Power?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your area experienced 3 grid outages last year, averaging 4 hours each. Adding a battery backup system
            ensures uninterrupted power for your critical appliances—refrigerator, internet, and lights.
          </p>
        </section>

        {/* Section 7: Investment & Financing */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment & Financing</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Cost Breakdown</h3>
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center w-full border-b border-gray-200 px-4 py-3">
                <span className="text-gray-700">Equipment (Panels, Inverters, Racking)</span>
                <span className="font-semibold text-gray-900">$18,500</span>
              </div>
              <div className="flex justify-between items-center w-full border-b border-gray-200 px-4 py-3">
                <span className="text-gray-700">Labor & Installation</span>
                <span className="font-semibold text-gray-900">$6,200</span>
              </div>
              <div className="flex justify-between items-center w-full border-b border-gray-200 px-4 py-3">
                <span className="text-gray-700">Permitting & Inspection Fees</span>
                <span className="font-semibold text-gray-900">$1,550</span>
              </div>
              <div className="flex justify-between items-center w-full bg-gray-50 px-4 py-3">
                <span className="font-bold text-gray-900">Total System Cost</span>
                <span className="font-bold text-gray-900">$26,250</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Financing Option</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Cash Purchase */}
              <button
                onClick={() => setFinancingOption('cash')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  financingOption === 'cash'
                    ? 'border-orange-500 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    financingOption === 'cash' ? 'border-orange-500 bg-orange-500' : 'border-gray-400'
                  }`}>
                    {financingOption === 'cash' && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cash Purchase</h4>
                <div className="text-3xl font-bold text-orange-600 mb-2">$18,375</div>
                <p className="text-sm text-gray-600 mb-3">After 30% Federal ITC</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Highest lifetime savings</li>
                  <li>✓ Immediate 30% tax credit</li>
                  <li>✓ No interest or fees</li>
                </ul>
              </button>

              {/* Solar Loan */}
              <button
                onClick={() => setFinancingOption('loan')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  financingOption === 'loan'
                    ? 'border-orange-500 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    financingOption === 'loan' ? 'border-orange-500 bg-orange-500' : 'border-gray-400'
                  }`}>
                    {financingOption === 'loan' && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    Most Popular
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Solar Loan</h4>
                <div className="text-3xl font-bold text-orange-600 mb-2">$175/mo</div>
                <p className="text-sm text-gray-600 mb-3">20-year term, 4.99% APR</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ $0 down payment</li>
                  <li>✓ You keep 30% tax credit</li>
                  <li>✓ Own the system</li>
                </ul>
              </button>

              {/* Lease/PPA */}
              <button
                onClick={() => setFinancingOption('lease')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  financingOption === 'lease'
                    ? 'border-orange-500 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    financingOption === 'lease' ? 'border-orange-500 bg-orange-500' : 'border-gray-400'
                  }`}>
                    {financingOption === 'lease' && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Lease / PPA</h4>
                <div className="text-3xl font-bold text-orange-600 mb-2">$145/mo</div>
                <p className="text-sm text-gray-600 mb-3">25-year agreement</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ $0 upfront cost</li>
                  <li>✓ Maintenance included</li>
                  <li>✓ Predictable payments</li>
                </ul>
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Available Incentives</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Federal ITC:</strong> 30% tax credit ($7,875) - Available through 2032</li>
              <li>• <strong>State Rebate:</strong> $1,000 instant rebate - Limited funding</li>
              <li>• <strong>Net Metering:</strong> Earn credits for excess energy sent to grid</li>
            </ul>
          </div>
        </section>

        {/* Section 8: Your 25-Year Financial Picture */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-800">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your 25-Year Financial Picture</h2>
          
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={thumbBenefits}
              alt="Financial Benefits" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-medium">Visualizing your long-term energy savings</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50">
              <div className="text-sm text-gray-600 mb-1">Average Monthly Savings</div>
              <div className="text-5xl font-bold text-orange-600">$228</div>
            </div>

            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50">
              <div className="text-sm text-gray-600 mb-1">Total 25-Year Savings</div>
              <div className="text-5xl font-bold text-orange-600">$68,420</div>
            </div>

            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50 mb-6">
              <p className="text-sm text-gray-700 font-medium mb-2">25-Year Savings Timeline</p>
              <p className="text-xs text-gray-600">
                Year-by-year breakdown with cumulative savings and break-even point at Year 6
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Year 6: Breakeven</div>
                <div className="text-xl font-bold text-orange-600">System Paid Off</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Years 7-25</div>
                <div className="text-xl font-bold text-orange-600">Pure Savings</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Home Value</div>
                <div className="text-xl font-bold text-orange-600">+$21,000</div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 p-4 bg-orange-50/30 mt-6">
            <p className="text-gray-700 leading-relaxed italic">
              <strong>Imagine Year 6:</strong> System paid for itself. <strong>Years 7-25:</strong> Pure savings
              go to your priorities—kids' college, retirement, vacations. A 25-year investment that outlives the
              typical mortgage and builds lasting value.
            </p>
          </div>
        </section>

        {/* Section 9: Common Questions Answered */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions Answered</h2>

          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-200">
              <summary className="font-semibold text-gray-900">Does this void my roof warranty?</summary>
              <p className="mt-3 text-gray-700 text-sm">
                No. Our installation includes roof penetration sealing and we work with certified roofers. Your
                roof warranty remains intact, and we provide a 10-year workmanship warranty covering any
                roof-related issues.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-200">
              <summary className="font-semibold text-gray-900">What about cloudy days?</summary>
              <p className="mt-3 text-gray-700 text-sm">
                Panels still generate on cloudy days, producing 15-25% of peak output. Your area gets 245 sunny
                days per year—more than enough to meet your energy goals and achieve projected savings.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-200">
              <summary className="font-semibold text-gray-900">What if I sell my house?</summary>
              <p className="mt-3 text-gray-700 text-sm">
                Solar increases home value by an average of $21,000 in your market. Systems transfer to new owners
                seamlessly, and homes with solar sell 20% faster according to Zillow research.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-200">
              <summary className="font-semibold text-gray-900">What maintenance is required?</summary>
              <p className="mt-3 text-gray-700 text-sm">
                Minimal. Rain naturally cleans panels, and we include a complimentary inspection every 5 years.
                Microinverters have no moving parts—virtually maintenance-free for 25+ years.
              </p>
            </details>
          </div>
        </section>

        {/* Section 10: Environmental Impact */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-1000">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Environmental Impact</h2>
          
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={thumbBenefits}
              alt="Environmental Impact" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-medium">Making a difference for future generations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-dashed border-teal-300 rounded-lg p-6 text-center bg-teal-50">
              <div className="text-sm text-gray-600 mb-1">CO₂ Offset (25 Years)</div>
              <div className="text-5xl font-bold text-brand-teal">142 Tons</div>
            </div>
            <div className="border-2 border-dashed border-teal-300 rounded-lg p-6 text-center bg-teal-50">
              <div className="text-sm text-gray-600 mb-1">Tree Equivalent</div>
              <div className="text-5xl font-bold text-brand-teal">3,200</div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Car Miles Not Driven:</strong> 325,000 miles worth of emissions prevented
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Households Powered:</strong> Your system could power 1.2 average homes for a year
            </p>
          </div>

          <div className="border-l-4 border-teal-500 p-4 bg-teal-50/30">
            <p className="text-gray-700 leading-relaxed italic">
              <strong>Your legacy:</strong> Beyond savings, solar represents your commitment to cleaner air, reduced
              carbon emissions, and a healthier planet for your children and grandchildren. Every kilowatt-hour
              generated is a step toward energy independence and environmental stewardship.
            </p>
          </div>
        </section>

        {/* Section 11: Project Timeline */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-1100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Project Timeline</h2>
          
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={thumbTimeline}
              alt="Installation Timeline" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-medium">From contract to clean energy in 5 weeks</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phase 1: Design & Engineering (Weeks 1-2)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Site survey and precise measurements of your roof</li>
                <li>• Final system engineering and electrical design</li>
                <li>• HOA approval assistance (if applicable)</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phase 2: Installation (Weeks 3-4)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Permitting and utility approvals secured</li>
                <li>• Equipment delivery to your property</li>
                <li>• Professional installation (typically 2-3 days)</li>
                <li>• Final inspection by local authority</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phase 3: Activation (Week 5)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Utility interconnection and net metering setup</li>
                <li>• System commissioning and performance testing</li>
                <li>• Monitoring app setup and training</li>
                <li>• Welcome to clean energy—you're live!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 12: Next Steps */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-1200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={thumbSteps}
              alt="Next Steps" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-medium">Your journey to energy independence starts here</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg">
              Schedule Your Free Site Assessment
            </Button>
            <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 py-6 text-lg">
              Download Full Proposal PDF
            </Button>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Questions? We're Here to Help</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>📧 Email: sarah.johnson@solarpros.com</p>
              <p>📞 Phone: (555) 123-4567</p>
              <p>🕒 Available: Mon-Fri 8am-6pm, Sat 9am-2pm</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mt-4">
            This proposal is valid for 30 days. Federal incentives and pricing subject to change.
          </p>
        </section>

        {/* Section 13: Company Information Footer */}
        <section className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6 animate-in fade-in duration-700 delay-1300">
          <div className="relative rounded-lg overflow-hidden mb-6">
            <img 
              src={thumbCompany}
              alt="Our Company" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-medium">Trusted solar experts since 2008</p>
            </div>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">SolarPros Energy Solutions</h3>
            <p className="text-gray-700 text-sm">
              California's premier solar installer with over 5,000 satisfied customers and a 4.9-star rating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="text-center">
              <p className="font-semibold mb-1">Licensed & Insured</p>
              <p className="text-xs text-gray-600">CA License #987654</p>
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Service Areas</p>
              <p className="text-xs text-gray-600">Bay Area & Central Valley</p>
            </div>
            <div className="text-center">
              <p className="font-semibold mb-1">Years in Business</p>
              <p className="text-xs text-gray-600">15+ Years of Excellence</p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-6 pt-4 border-t border-gray-200">
            <p>© 2024 SolarPros Energy Solutions. All rights reserved.</p>
            <p className="mt-1">www.solarpros.com | info@solarpros.com | (555) 123-4567</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PreviewProposal;
