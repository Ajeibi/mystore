import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from 'react';

export default function RadioBoxComponent() {
    return (
        <div className="pt-10">
            <h2 className="text-lg font-semibold mb-4">Sort By</h2>
            <RadioGroup defaultValue="recent" className="gap-3 font-great-vibes font-thin">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem
                        value="oldest"
                        id="r1"
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                    />
                    <Label htmlFor="r1" className="text-sm">Latest</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem
                        value="recent"
                        id="r2"
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                    />
                    <Label htmlFor="r2" className="text-sm">Oldest</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
