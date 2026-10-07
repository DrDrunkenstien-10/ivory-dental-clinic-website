export interface ClinicHours {
	days: string;
	times: string[];
	closed?: boolean;
}

export interface Treatment {
	name: string;
	icon: string;
}

export const clinic = {
	name: 'Ivory Dental Clinic',
	tagline: 'Happy smiles, healthy lives.',
	phoneDisplay: '+91 74982 27203',
	phoneHref: 'tel:+917498227203',
	email: 'ivorydental22@gmail.com',
	address: 'Shri Seva Hospital, Bhekarainagar, Pune – 412308',
	mapsQuery:
		'https://www.google.com/maps/search/?api=1&query=Shri+Seva+Hospital%2C+Bhekarainagar%2C+Pune+412308',
	mapEmbed:
		'https://www.google.com/maps?q=Shri+Seva+Hospital%2C+Bhekarainagar%2C+Pune+412308&output=embed',
	googleProfile: 'https://share.google/egRnMMnGGmBIy9HKi',
	geo: { latitude: 18.4821229, longitude: 73.954296 },
	doctor: {
		name: 'Dr. Apurva Undre',
		degree: 'BDS (M.U.H.S.)',
		registration: 'A-41949',
		fellowship: 'Fellowship in Microdentistry',
		fellowshipInstitution: 'Government Dental College',
		specialization: 'Cosmetic Dentist',
	},
	hours: [
		{ days: 'Monday – Friday', times: ['10:00 AM – 1:30 PM', '5:30 PM – 8:00 PM'] },
		{ days: 'Saturday', times: ['10:00 AM – 4:00 PM'] },
		{ days: 'Sunday', times: ['Closed'], closed: true },
	] satisfies ClinicHours[],
	treatments: [
		{ name: 'Check-up & X-Ray', icon: 'search' },
		{ name: 'Fillings & Restorations', icon: 'sparkle' },
		{ name: 'Root Canal Treatment (RCT)', icon: 'root' },
		{ name: 'Crowns & Bridges', icon: 'crown' },
		{ name: 'Dental Implants', icon: 'implant' },
		{ name: 'Dentures', icon: 'smile' },
		{ name: 'Professional Teeth Cleaning', icon: 'clean' },
		{ name: 'Pediatric Dentistry', icon: 'heart' },
		{ name: 'Wisdom Tooth Removal', icon: 'tooth' },
		{ name: 'Braces & Invisible Aligners', icon: 'align' },
		{ name: 'Cosmetic Dentistry', icon: 'diamond' },
		{ name: 'Smile Designing', icon: 'smile' },
		{ name: 'Gum Treatment', icon: 'leaf' },
		{ name: 'Preventive Dental Care', icon: 'shield' },
	] satisfies Treatment[],
} as const;

