import { useState, useEffect, useRef } from 'react';
import { SCHOOL_DATA } from '../data/school';
import { X, CheckCircle2, Eye, EyeOff, Search, ChevronLeft, ChevronRight, Bus, MapPin, Clock } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export interface ModalState {
  type:
    | null
    | 'admission'
    | 'visit'
    | 'parent-login'
    | 'parent-portal-demo'
    | 'fee-payment'
    | 'bus-tracking'
    | 'search'
    | 'campus-gallery'
    | 'academic-more'
    | 'life-more'
    | 'event-detail'
    | 'news-detail'
    | 'view-all-events'
    | 'view-all-news'
    | 'view-all-testimonials'
    | 'info';
  payload?: any;
}

interface ModalManagerProps {
  modalState: ModalState;
  onClose: () => void;
  onOpenModal: (type: ModalState['type'], payload?: any) => void;
}

export const ModalManager: React.FC<ModalManagerProps> = ({ modalState, onClose, onOpenModal }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Form states
  const [admissionForm, setAdmissionForm] = useState({
    studentName: '',
    grade: 'Class I',
    parentName: '',
    phone: '',
    email: '',
  });
  const [admissionSubmitted, setAdmissionSubmitted] = useState(false);

  const [visitForm, setVisitForm] = useState({
    name: '',
    phone: '',
    date: '2026-09-20',
    timeSlot: '10:00 AM - 11:30 AM',
  });
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ studentId: 'SPS-2024-884', password: 'password123' });

  // Fee state
  const [feePaid, setFeePaid] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Gallery state
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryImages = [
    {
      src: getAssetUrl('/images/campus.webp'),
      caption: 'Main Academic Block & Landscaped Entrance',
      subtitle: 'Smart classrooms, auditorium, and digital library wings.',
    },
    {
      src: getAssetUrl('/images/hero-students.webp'),
      caption: 'Central Courtyard & Assembly Plaza',
      subtitle: 'Daily student assemblies and cultural gatherings.',
    },
    {
      src: getAssetUrl('/images/academic-lab.webp'),
      caption: 'Advanced STEM & Composite Science Laboratory',
      subtitle: 'Modern equipment for physics, chemistry, and biology research.',
    },
    {
      src: getAssetUrl('/images/student-basketball.webp'),
      caption: 'Outdoor Sports Pavilion & Basketball Courts',
      subtitle: 'FIBA standard basketball courts, athletics track, and cricket nets.',
    },
    {
      src: getAssetUrl('/images/news-green-campus.webp'),
      caption: 'Botanical Garden & Herbal Nursery',
      subtitle: 'Student eco-club biodiversity cultivation zones.',
    },
  ];

  // Sync with native HTML <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (modalState.type) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      // Reset forms on full close
      setAdmissionSubmitted(false);
      setVisitSubmitted(false);
      setFeePaid(false);
      setSearchQuery('');
    }
  }, [modalState.type]);

  const handleNativeClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  // Search indexing
  const searchResults = searchQuery.trim()
    ? [
        ...SCHOOL_DATA.features
          .filter(
            (f) =>
              f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              f.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((f) => ({ type: 'Pillar', title: f.title, desc: f.description, action: () => onOpenModal('academic-more') })),
        ...SCHOOL_DATA.events.items
          .filter(
            (e) =>
              e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              e.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((e) => ({ type: 'Event', title: e.title, desc: `${e.day} ${e.month} — ${e.subtitle}`, action: () => onOpenModal('event-detail', e) })),
        ...SCHOOL_DATA.news.items
          .filter(
            (n) =>
              n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              n.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((n) => ({ type: 'News', title: n.title, desc: `${n.date} — ${n.subtitle}`, action: () => onOpenModal('news-detail', n) })),
      ]
    : [];

  if (!modalState.type) return null;

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleNativeClose}
      className="fixed inset-0 m-auto p-0 bg-transparent backdrop:bg-black/60 backdrop:backdrop-blur-xs z-50 max-w-[620px] w-[92vw] max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden focus:outline-none"
    >
      <div className="bg-white rounded-2xl flex flex-col max-h-[90vh] overflow-hidden text-[#082959]">
        {/* Modal Top Bar */}
        <div className="bg-[#082959] text-white px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFAF24]" />
            <h2 className="font-heading-serif text-sm sm:text-base font-bold text-white tracking-wide">
              {modalState.type === 'admission' && 'Online Admission Application (2027–28)'}
              {modalState.type === 'visit' && 'Book a Campus Tour & Visit'}
              {modalState.type === 'parent-login' && 'SPS Parent Portal Access'}
              {modalState.type === 'parent-portal-demo' && 'Student Academic Dashboard Preview'}
              {modalState.type === 'fee-payment' && 'Online Fee Payment Preview'}
              {modalState.type === 'bus-tracking' && 'Live School Bus Route Tracking'}
              {modalState.type === 'search' && 'Search Sankalp Public School'}
              {modalState.type === 'campus-gallery' && 'Campus Facilities Gallery'}
              {modalState.type === 'academic-more' && 'Academic Curriculum & Methodology'}
              {modalState.type === 'life-more' && 'Life at SPS & Holistic Development'}
              {modalState.type === 'event-detail' && 'Event Details'}
              {modalState.type === 'news-detail' && 'School News Archive'}
              {modalState.type === 'view-all-events' && 'All Upcoming Events'}
              {modalState.type === 'view-all-news' && 'Recent School Announcements'}
              {modalState.type === 'view-all-testimonials' && 'Voices of SPS Parents'}
              {modalState.type === 'info' && (modalState.payload?.title || 'School Information')}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 overflow-y-auto flex-1">

          {/* 1. ADMISSION FORM */}
          {modalState.type === 'admission' && (
            <div>
              {admissionSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading-serif text-xl font-bold text-[#082959] mb-1">
                    Application Received (Demo Preview)
                  </h3>
                  <p className="text-xs text-[#485469] max-w-md mx-auto mb-4">
                    Thank you! We have recorded your interest for <strong>{admissionForm.studentName}</strong> into{' '}
                    <strong>{admissionForm.grade}</strong>.
                  </p>
                  <div className="bg-[#FEF9F1] border border-[#FFAF24]/30 rounded-lg p-3 text-[11px] text-[#485469] mb-4 text-left">
                    <p className="font-bold text-[#082959] mb-1">Preview Notice:</p>
                    <p>
                      This is an interactive user interface demonstration. No actual student record has been submitted or transmitted over the internet.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-[#008697] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#006E7D]"
                  >
                    Close Preview
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAdmissionSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <p className="text-xs text-[#485469] mb-2">
                    Begin your child’s educational journey at Sankalp Public School for Academic Session 2027–28.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-[#082959] mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={admissionForm.studentName}
                      onChange={(e) => setAdmissionForm({ ...admissionForm, studentName: e.target.value })}
                      className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg focus:border-[#008697] focus:ring-1 focus:ring-[#008697] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#082959] mb-1">Admission For Class *</label>
                      <select
                        value={admissionForm.grade}
                        onChange={(e) => setAdmissionForm({ ...admissionForm, grade: e.target.value })}
                        className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg focus:border-[#008697] outline-none bg-white"
                      >
                        <option>Pre-Nursery / KG</option>
                        <option>Class I</option>
                        <option>Class V</option>
                        <option>Class VIII</option>
                        <option>Class XI (Science)</option>
                        <option>Class XI (Commerce)</option>
                        <option>Class XI (Humanities)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#082959] mb-1">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={admissionForm.parentName}
                        onChange={(e) => setAdmissionForm({ ...admissionForm, parentName: e.target.value })}
                        className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg focus:border-[#008697] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#082959] mb-1">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={admissionForm.phone}
                        onChange={(e) => setAdmissionForm({ ...admissionForm, phone: e.target.value })}
                        className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg focus:border-[#008697] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#082959] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={admissionForm.email}
                        onChange={(e) => setAdmissionForm({ ...admissionForm, email: e.target.value })}
                        className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg focus:border-[#008697] outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold text-[#485469] hover:bg-slate-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold bg-[#FFAF24] hover:bg-[#E89B15] text-[#082959] rounded-lg shadow-sm transition-all"
                    >
                      Submit Application Preview →
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 2. CAMPUS VISIT */}
          {modalState.type === 'visit' && (
            <div>
              {visitSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading-serif text-xl font-bold text-[#082959] mb-1">
                    Campus Tour Slot Reserved (Preview)
                  </h3>
                  <p className="text-xs text-[#485469] mb-3">
                    We look forward to hosting you on <strong>{visitForm.date}</strong> during the{' '}
                    <strong>{visitForm.timeSlot}</strong> slot.
                  </p>
                  <p className="text-[11px] text-slate-500 italic mb-4">
                    Demonstration notice: No appointment has been written to the calendar.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#008697] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#006E7D]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setVisitSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <p className="text-xs text-[#485469]">
                    Tour our academic classrooms, sports complex, robotic labs, and meet our faculty counselors.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-[#082959] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Parent / Guardian Name"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#082959] mb-1">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                        className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#082959] mb-1">Time Slot *</label>
                      <select
                        value={visitForm.timeSlot}
                        onChange={(e) => setVisitForm({ ...visitForm, timeSlot: e.target.value })}
                        className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg outline-none bg-white"
                      >
                        <option>09:00 AM - 10:30 AM</option>
                        <option>10:30 AM - 12:00 PM</option>
                        <option>02:00 PM - 03:30 PM</option>
                        <option>04:00 PM - 05:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold text-[#485469] hover:bg-slate-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold bg-[#008697] text-white rounded-lg shadow-sm hover:bg-[#006E7D]"
                    >
                      Confirm Booking Preview →
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 3. PARENT LOGIN & PORTAL */}
          {modalState.type === 'parent-login' && (
            <div className="space-y-4">
              <div className="bg-[#EDF7FE] p-3 rounded-lg border border-[#1A6AB2]/20 text-[11.5px] text-[#082959]">
                <p className="font-bold mb-0.5">SPS Parent Portal (Demo Environment)</p>
                <p className="text-[#485469]">
                  Enter test credentials or click <strong>View demo portal</strong> to inspect student performance, attendance, and fee status.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#082959] mb-1">Student Enrollment ID</label>
                <input
                  type="text"
                  value={loginForm.studentId}
                  onChange={(e) => setLoginForm({ ...loginForm, studentId: e.target.value })}
                  className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg font-mono outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#082959] mb-1">Portal Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full text-xs p-2.5 border border-[#E5EBF0] rounded-lg pr-9 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <span className="text-[11px] text-slate-400">No passwords or data are stored.</span>
                <button
                  type="button"
                  onClick={() => onOpenModal('parent-portal-demo')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#1A6AB2] hover:bg-[#145591] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  View Demo Portal →
                </button>
              </div>
            </div>
          )}

          {/* PARENT PORTAL DEMO DASHBOARD */}
          {modalState.type === 'parent-portal-demo' && (
            <div className="space-y-4">
              {/* Student Profile Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-[#E5EBF0]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#1A6AB2] text-white flex items-center justify-center font-bold text-sm">
                    AS
                  </div>
                  <div>
                    <h4 className="font-heading-serif font-bold text-sm text-[#082959]">Aarav Sharma</h4>
                    <p className="text-[11px] text-slate-500">Class VIII-B · Roll #18 · House: Agni</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">
                  Active Enrolled
                </span>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-2.5 bg-[#EDF9F7] rounded-lg border border-[#008697]/20">
                  <span className="block text-base font-bold text-[#008697]">94.6%</span>
                  <span className="text-[10px] text-slate-600">Attendance</span>
                </div>
                <div className="p-2.5 bg-[#EDF7FE] rounded-lg border border-[#1A6AB2]/20">
                  <span className="block text-base font-bold text-[#1A6AB2]">A1 (92%)</span>
                  <span className="text-[10px] text-slate-600">Term 1 Grade</span>
                </div>
                <div className="p-2.5 bg-[#FEF5F0] rounded-lg border border-[#E65D24]/20">
                  <span className="block text-base font-bold text-[#E65D24]">Paid</span>
                  <span className="text-[10px] text-slate-600">Q3 Fee Status</span>
                </div>
              </div>

              {/* Weekly Timetable preview */}
              <div>
                <h5 className="font-heading-serif font-bold text-xs text-[#082959] mb-2">Today’s Schedule (Monday)</h5>
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 bg-slate-50 rounded flex justify-between border-l-2 border-[#008697]">
                    <span>08:30 AM – Mathematics (Tr. R. Verma)</span>
                    <span className="font-semibold text-slate-500">Room 204</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded flex justify-between border-l-2 border-[#1A6AB2]">
                    <span>09:30 AM – Integrated Science (Lab 2)</span>
                    <span className="font-semibold text-slate-500">Science Wing</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded flex justify-between border-l-2 border-[#FFAF24]">
                    <span>11:15 AM – English Literature (Library)</span>
                    <span className="font-semibold text-slate-500">Room 204</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <button
                  type="button"
                  onClick={() => onOpenModal('parent-login')}
                  className="text-slate-500 hover:text-[#082959] underline"
                >
                  ← Back to Login
                </button>
                <button
                  type="button"
                  onClick={() => onOpenModal('fee-payment')}
                  className="bg-[#008697] text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Pay Term Fees →
                </button>
              </div>
            </div>
          )}

          {/* 4. FEE PAYMENT */}
          {modalState.type === 'fee-payment' && (
            <div className="space-y-3.5">
              {feePaid ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading-serif text-xl font-bold text-[#082959] mb-1">
                    Receipt Generated (Demo Preview)
                  </h3>
                  <p className="text-xs text-[#485469] mb-4">
                    Transaction Ref: <strong>SPS-TXN-2026-9812</strong> · Amount: <strong>₹32,500</strong>
                  </p>
                  <p className="text-[11px] text-slate-400 italic mb-4">
                    Notice: This is a demo preview. No funds were debited or card information requested.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#008697] text-white px-6 py-2 rounded-lg font-semibold text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs text-[#485469]">
                    Quarterly educational and composite laboratory fee breakdown for Student ID: <strong>SPS-2024-884</strong>
                  </p>

                  <div className="border border-[#E5EBF0] rounded-xl overflow-hidden text-xs">
                    <div className="bg-slate-50 px-3.5 py-2 font-bold text-[#082959] border-b border-[#E5EBF0]">
                      Fee Structure — Q3 (2024–25)
                    </div>
                    <div className="divide-y divide-[#E5EBF0] p-3 space-y-2">
                      <div className="flex justify-between text-slate-700">
                        <span>Tuition & Smart Classroom Fee</span>
                        <span className="font-semibold">₹24,000</span>
                      </div>
                      <div className="flex justify-between text-slate-700 pt-1.5">
                        <span>STEM & Robotics Laboratory Levy</span>
                        <span className="font-semibold">₹4,500</span>
                      </div>
                      <div className="flex justify-between text-slate-700 pt-1.5">
                        <span>Sports Complex & Activity Fee</span>
                        <span className="font-semibold">₹2,500</span>
                      </div>
                      <div className="flex justify-between text-slate-700 pt-1.5">
                        <span>Annual Library & Resource Charge</span>
                        <span className="font-semibold">₹1,500</span>
                      </div>
                      <div className="flex justify-between text-[#082959] font-bold pt-2 border-t-2 border-slate-200">
                        <span>Total Payable</span>
                        <span className="text-[#008697] text-sm">₹32,500</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FEF5F0] rounded-lg border border-[#E65D24]/20 text-[11px] text-[#485469]">
                    <p className="font-bold text-[#E65D24] mb-0.5">Secure Payment Demonstration</p>
                    <p>
                      Clicking below demonstrates instant local verification and receipt issuance.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeePaid(true)}
                      className="px-5 py-2 text-xs font-bold bg-[#E65D24] hover:bg-[#cf4f1a] text-white rounded-lg shadow-sm"
                    >
                      Preview Payment Confirmation →
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* 5. BUS TRACKING */}
          {modalState.type === 'bus-tracking' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#EAF9F0] rounded-xl border border-[#2B8A46]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#2B8A46] text-white flex items-center justify-center">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading-serif font-bold text-xs text-[#082959]">Route #07 — Shankar Nagar Express</h4>
                    <p className="text-[10.5px] text-slate-600">Bus No: CG-04-E-4421 · Driver: Mr. Ramesh Singh (+91 94252 00000)</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full animate-pulse">
                  Live En Route
                </span>
              </div>

              {/* Route Map Diagram (SVG) */}
              <div className="bg-slate-50 p-4 rounded-xl border border-[#E5EBF0]">
                <div className="flex items-center justify-between text-xs font-bold text-[#082959] mb-4">
                  <span>Transit Timeline</span>
                  <span className="text-[#008697]">Estimated Arrival: ~12 Mins</span>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#2B8A46]/40">
                  <div className="relative flex items-center gap-3">
                    <div className="absolute -left-6 w-5 h-5 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-600">Civil Lines Stop (Departed 07:45 AM)</p>
                      <p className="text-[10px] text-slate-400">Boarded 14 students</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-3">
                    <div className="absolute -left-6 w-5 h-5 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-600">Shankar Nagar Chowk (Departed 08:05 AM)</p>
                      <p className="text-[10px] text-slate-400">Boarded 8 students</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-3">
                    {/* Live Moving Marker */}
                    <div className="absolute -left-6 w-5 h-5 rounded-full bg-[#2B8A46] border-2 border-white flex items-center justify-center shadow-md">
                      <Bus className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-emerald-50 px-2.5 py-1 rounded border border-[#2B8A46]/30">
                      <p className="text-xs font-bold text-[#2B8A46]">Current Location: Telibandha Ring Road</p>
                      <p className="text-[10px] text-[#2B8A46]/80">Moving at 38 km/h · Normal traffic</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-3">
                    <div className="absolute -left-6 w-5 h-5 rounded-full bg-[#FFAF24] border-2 border-white flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-[#082959]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#082959]">Sankalp Public School Main Gate</p>
                      <p className="text-[10px] text-slate-500">Destination · ETA 08:25 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic text-center">
                Sample simulation using fixed demo telemetry. No live GPS hardware connection required.
              </p>
            </div>
          )}

          {/* 6. SEARCH MODAL */}
          {modalState.type === 'search' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search sports, admission, events, news, faculty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm pl-9 pr-4 py-2.5 border border-[#E5EBF0] rounded-xl focus:border-[#008697] outline-none"
                />
              </div>

              {/* Search Results */}
              <div className="min-h-[160px] max-h-[280px] overflow-y-auto divide-y divide-[#E5EBF0]">
                {searchQuery.trim() === '' ? (
                  <div className="text-center py-8 text-slate-400 text-xs">
                    Type a keyword above to search through academics, events, and campus updates.
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="text-center py-8 text-slate-400 text-xs">
                    No matching records found for "{searchQuery}". Try searching "science", "sports", or "admission".
                  </div>
                ) : (
                  searchResults.map((res, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={res.action}
                      className="w-full text-left p-2.5 hover:bg-[#EDF7FE] transition-colors rounded-lg flex flex-col cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-[#082959]/10 text-[#082959] text-[9px] font-bold rounded uppercase">
                          {res.type}
                        </span>
                        <h4 className="font-heading-serif font-bold text-xs text-[#082959]">{res.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{res.desc}</p>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {/* 7. CAMPUS GALLERY */}
          {modalState.type === 'campus-gallery' && (
            <div className="space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={galleryImages[galleryIndex].src}
                  alt={galleryImages[galleryIndex].caption}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setGalleryIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading-serif font-bold text-sm text-[#082959]">
                    {galleryImages[galleryIndex].caption}
                  </h4>
                  <p className="text-xs text-slate-500">{galleryImages[galleryIndex].subtitle}</p>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {galleryIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          )}

          {/* 8. FEATURE DETAILS (ACADEMIC / LIFE) */}
          {(modalState.type === 'academic-more' || modalState.type === 'life-more') && (
            <div className="space-y-3 text-xs leading-relaxed text-[#485469]">
              <p className="font-semibold text-sm text-[#082959]">
                {modalState.type === 'academic-more'
                  ? 'Excellence in Pedagogy & CBSE Affiliation'
                  : 'Holistic Co-Curricular & Sports Atmosphere'}
              </p>
              <p>
                At Sankalp Public School, students benefit from a student-centric environment anchored in foundational concept mastery, scientific inquiry, and ethical leadership.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>CBSE Board Senior Secondary affiliation (Science, Commerce, Humanities).</li>
                <li>Digital smart boards and blended interactive classrooms.</li>
                <li>Comprehensive physical education, yoga, and inter-school championship teams.</li>
                <li>Life skills, coding labs, debating society, and community outreach clubs.</li>
              </ul>
              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => onOpenModal('admission')}
                  className="bg-[#FFAF24] text-[#082959] px-4 py-2 rounded-lg font-bold text-xs"
                >
                  Enroll Your Child →
                </button>
              </div>
            </div>
          )}

          {/* 9. EVENT DETAIL */}
          {modalState.type === 'event-detail' && modalState.payload && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-[#E5EBF0]">
                <div
                  className="w-12 h-12 rounded-lg text-white flex flex-col items-center justify-center font-bold"
                  style={{ backgroundColor: modalState.payload.badgeColor }}
                >
                  <span className="text-sm leading-none">{modalState.payload.day}</span>
                  <span className="text-[10px] uppercase leading-none mt-1">{modalState.payload.month}</span>
                </div>
                <div>
                  <h4 className="font-heading-serif font-bold text-base text-[#082959]">
                    {modalState.payload.title}
                  </h4>
                  <p className="text-xs text-[#008697] font-semibold">{modalState.payload.subtitle}</p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#485469]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span><strong>Time:</strong> {modalState.payload.time || '10:00 AM - 2:00 PM'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span><strong>Venue:</strong> {modalState.payload.location || 'SPS Main Auditorium'}</span>
                </div>
              </div>

              <p className="text-xs text-[#485469] leading-relaxed pt-2">
                {modalState.payload.description ||
                  'Join us as our teachers, parents, and students gather to celebrate school milestones, collaborative projects, and student spirit.'}
              </p>
            </div>
          )}

          {/* 10. NEWS DETAIL */}
          {modalState.type === 'news-detail' && modalState.payload && (
            <div className="space-y-3">
              <img
                src={getAssetUrl(modalState.payload.imageSrc)}
                alt={modalState.payload.imageAlt}
                className="w-full h-48 object-cover rounded-xl border border-[#E5EBF0]"
              />
              <div>
                <span className="text-[10px] font-bold uppercase text-[#008697] tracking-wider">
                  {modalState.payload.category || 'School Update'} · {modalState.payload.date}
                </span>
                <h4 className="font-heading-serif font-bold text-base text-[#082959] mt-0.5">
                  {modalState.payload.title}
                </h4>
                <p className="text-xs text-[#485469] font-medium mt-1">{modalState.payload.subtitle}</p>
              </div>

              <p className="text-xs text-[#485469] leading-relaxed pt-1">
                {modalState.payload.fullStory ||
                  'Sankalp Public School continues its tradition of academic rigor, extracurricular vibrance, and character building throughout the academic term.'}
              </p>
            </div>
          )}

          {/* 11. VIEW ALL EVENTS */}
          {modalState.type === 'view-all-events' && (
            <div className="space-y-3">
              {SCHOOL_DATA.events.items.map((event) => (
                <div
                  key={event.id}
                  onClick={() => onOpenModal('event-detail', event)}
                  className="p-3 bg-slate-50 hover:bg-[#EDF7FE] transition-colors rounded-xl border border-[#E5EBF0] flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg text-white flex flex-col items-center justify-center font-bold shrink-0"
                      style={{ backgroundColor: event.badgeColor }}
                    >
                      <span className="text-xs">{event.day}</span>
                      <span className="text-[9px] uppercase">{event.month}</span>
                    </div>
                    <div>
                      <h5 className="font-heading-serif font-bold text-xs text-[#082959]">{event.title}</h5>
                      <p className="text-[11px] text-slate-500">{event.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#008697]">View →</span>
                </div>
              ))}
            </div>
          )}

          {/* 12. VIEW ALL NEWS */}
          {modalState.type === 'view-all-news' && (
            <div className="space-y-3">
              {SCHOOL_DATA.news.items.map((n) => (
                <div
                  key={n.id}
                  onClick={() => onOpenModal('news-detail', n)}
                  className="p-3 bg-slate-50 hover:bg-[#EDF7FE] transition-colors rounded-xl border border-[#E5EBF0] flex items-center gap-3 cursor-pointer"
                >
                  <img src={getAssetUrl(n.imageSrc)} alt={n.imageAlt} className="w-14 h-11 object-cover rounded-lg shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-slate-400 font-medium">{n.date}</span>
                    <h5 className="font-heading-serif font-bold text-xs text-[#082959] truncate">{n.title}</h5>
                    <p className="text-[11px] text-slate-500 truncate">{n.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 13. VIEW ALL TESTIMONIALS */}
          {modalState.type === 'view-all-testimonials' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-[#E5EBF0]">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={getAssetUrl(SCHOOL_DATA.testimonial.avatarSrc)}
                    alt={SCHOOL_DATA.testimonial.avatarAlt}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-heading-serif font-bold text-xs text-[#082959]">{SCHOOL_DATA.testimonial.author}</h5>
                    <p className="text-[10px] text-slate-500">{SCHOOL_DATA.testimonial.authorRole}</p>
                  </div>
                </div>
                <p className="text-xs italic text-[#485469] font-serif leading-relaxed">
                  {SCHOOL_DATA.testimonial.quote}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-[#E5EBF0]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#143C65] text-white flex items-center justify-center font-bold text-xs">
                    AK
                  </div>
                  <div>
                    <h5 className="font-heading-serif font-bold text-xs text-[#082959]">Dr. Arvind Kumar</h5>
                    <p className="text-[10px] text-slate-500">Parent of Class X Student</p>
                  </div>
                </div>
                <p className="text-xs italic text-[#485469] font-serif leading-relaxed">
                  “The academic guidance and individual attention shown by the mentors here have shaped my child’s confidence immensely. The STEM facilities and sports arenas are unmatched.”
                </p>
              </div>
            </div>
          )}

          {/* 14. GENERAL INFO / ABOUT / FAQ */}
          {modalState.type === 'info' && (
            <div className="space-y-3 text-xs text-[#485469] leading-relaxed">
              <p className="font-semibold text-sm text-[#082959]">{modalState.payload?.headline || 'Sankalp Public School'}</p>
              <p>
                {modalState.payload?.text ||
                  'Sankalp Public School is committed to cultivating intellectual curiosity, moral responsibility, and global leadership skills in every child through experiential CBSE learning.'}
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-[#082959] mb-1">Campus Coordinates:</p>
                <p>{SCHOOL_DATA.identity.address}</p>
                <p>Telephone: {SCHOOL_DATA.identity.phone}</p>
                <p>Email: {SCHOOL_DATA.identity.email}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </dialog>
  );
};
